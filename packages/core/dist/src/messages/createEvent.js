import { hasInjectedConnection, wc_aleo_chains } from '../index.js';
import { getWalletConnectModalSignClient } from '../client.js';
export const requestCreateEvent = async (requestData, network) => {
    const connection = await getWalletConnectModalSignClient();
    const session = await connection?.getSession();
    if (!session || !connection) {
        return { error: 'no session or connection' };
    }
    const inputs = requestData?.inputs.map((input) => {
        if (typeof input === 'string') {
            return input;
        }
        return input.plaintext;
    });
    if (network && !wc_aleo_chains.includes(network)) {
        return { error: 'network not in wc_aleo_chains' };
    }
    const req = {
        topic: session.topic,
        chainId: network ?? 'aleo:1',
        request: {
            jsonrpc: '2.0',
            method: 'requestCreateEvent',
            params: {
                ...requestData,
                inputs,
            },
        },
    };
    if (hasInjectedConnection() && window.aleo.puzzleWalletClient.requestCreateEvent && window.aleo.puzzleWalletClient.requestCreateEvent.mutate) {
        try {
            const response = await window.aleo.puzzleWalletClient.requestCreateEvent.mutate(req);
            return response;
        }
        catch (e) {
            console.error('createEvent error', e);
            const error = e.message;
            return { error };
        }
    }
    try {
        const response = await connection.request(req);
        return response;
    }
    catch (e) {
        console.error('createEvent error', e);
        const error = e.message;
        return { error };
    }
};
