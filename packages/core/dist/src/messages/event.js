import { networkToChainId, wc_aleo_chains } from '../index.js';
import { getWalletConnectModalSignClient } from '../client.js';
import { hasInjectedConnection } from '../utils/clientInfo.js';
export const getEvent = async ({ id, address, network, }) => {
    const connection = await getWalletConnectModalSignClient();
    const session = await connection?.getSession();
    if (!session || !connection) {
        return { event: undefined, error: 'no session or connection' };
    }
    if (network && !wc_aleo_chains.includes(networkToChainId(network))) {
        return { error: 'network not in wc_aleo_chains' };
    }
    const query = {
        topic: session.topic,
        chainId: network ? networkToChainId(network) : 'aleo:0',
        request: {
            jsonrpc: '2.0',
            method: 'getEvent',
            params: {
                id,
                address,
            },
        },
    };
    if (hasInjectedConnection()) {
        try {
            const response = await window.aleo.puzzleWalletClient.getEvent.query(query);
            return response;
        }
        catch (e) {
            console.error('getEvent error', e);
            const error = e.message;
            return { error };
        }
    }
    const fetchEvent = async () => {
        const response = await connection.request(query);
        return response;
    };
    try {
        const response = await fetchEvent();
        return response;
    }
    catch (e) {
        console.error('getEvents error', e);
        const error = e.message;
        return { error };
    }
};
