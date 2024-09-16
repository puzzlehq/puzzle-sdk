import { networkToChainId, wc_aleo_chains } from '../index.js';
import { getWalletConnectModalSignClient } from '../client.js';
export const requestCreateEvent = async (requestData) => {
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
    if (requestData.network && !wc_aleo_chains.includes(networkToChainId(requestData.network))) {
        return { error: 'network not in wc_aleo_chains' };
    }
    try {
        const response = await connection.request({
            topic: session.topic,
            chainId: requestData.network ? networkToChainId(requestData.network) : 'aleo:0',
            request: {
                jsonrpc: '2.0',
                method: 'requestCreateEvent',
                params: {
                    ...requestData,
                    inputs,
                },
            },
        });
        return response;
    }
    catch (e) {
        console.error('createEvent error', e);
        const error = e.message;
        return { error };
    }
};
