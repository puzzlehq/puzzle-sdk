import { getWalletConnectModalSignClient } from '../client.js';
import { hasInjectedConnection } from '../utils/clientInfo.js';
import { networkToChainId, wc_aleo_chains } from '../data/walletconnect.js';
export const getBalance = async ({ address, network, }) => {
    const connection = await getWalletConnectModalSignClient();
    const session = await connection.getSession();
    if (!session || !connection) {
        return { error: 'no session or connection' };
    }
    if (network && !wc_aleo_chains.includes(networkToChainId(network))) {
        return { error: 'network not in wc_aleo_chains' };
    }
    const query = {
        topic: session.topic,
        chainId: network ? networkToChainId(network) : 'aleo:0',
        request: {
            jsonrpc: '2.0',
            method: 'getBalance',
            params: {
                address,
            },
        },
    };
    if (hasInjectedConnection()) {
        try {
            const response = await window.aleo.puzzleWalletClient.getBalance.query(query);
            return response;
        }
        catch (e) {
            const error = e.message;
            console.error('getBalance error', e);
            return { error };
        }
    }
    try {
        const response = await connection.request(query);
        return response;
    }
    catch (e) {
        const error = e.message;
        console.error('getBalance error', e);
        return { error };
    }
};
