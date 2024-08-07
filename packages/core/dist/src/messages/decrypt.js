import { getWalletConnectModalSignClient } from '../client.js';
import { hasInjectedConnection } from '../utils/clientInfo.js';
import { wc_aleo_chains } from '../data/walletconnect.js';
export const decrypt = async (ciphertexts, network) => {
    const connection = await getWalletConnectModalSignClient();
    const session = await connection?.getSession();
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
            method: 'decrypt',
            params: {
                ciphertexts: ciphertexts,
            },
        },
    };
    if (hasInjectedConnection()) {
        try {
            const response = await window.aleo.puzzleWalletClient.decrypt.query(query);
            return response;
        }
        catch (e) {
            const error = e.message;
            console.error('decrypt error', e);
            return { error };
        }
    }
    try {
        const response = await connection.request(query);
        return response;
    }
    catch (e) {
        console.error('decrypt error', e);
        return { error: e.message };
    }
};
