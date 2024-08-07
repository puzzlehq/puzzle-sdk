import { getWalletConnectModalSignClient } from '../client.js';
import { hasInjectedConnection } from '../utils/clientInfo.js';
import { wc_aleo_chains } from '../data/walletconnect.js';
export const getAccount = async (network) => {
    const connection = await getWalletConnectModalSignClient();
    const session = await connection.getSession();
    if (!session || !connection) {
        return { error: 'no session or connection' };
    }
    if (network && !wc_aleo_chains.includes(network)) {
        return { error: 'network not in wc_aleo_chains' };
    }
    const query = {
        topic: session.topic,
        chainId: network ?? 'aleo:1',
        request: {
            jsonrpc: '2.0',
            method: 'getSelectedAccount',
        },
    };
    if (hasInjectedConnection()) {
        try {
            const response = await window.aleo.puzzleWalletClient.getSelectedAccount.query(query);
            return response;
        }
        catch (e) {
            console.error('getAccount error', e);
            return { error: e.message };
        }
    }
    try {
        const response = await connection.request(query);
        return response;
    }
    catch (e) {
        console.error('getAccount error', e);
        const error = e.message;
        return { error };
    }
};
