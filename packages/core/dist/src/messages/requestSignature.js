import { getWalletConnectModalSignClient } from '../client.js';
import { aleoAddressRegex } from '@puzzlehq/types';
import { networkToChainId, wc_aleo_chains } from '../data/walletconnect.js';
export const requestSignature = async ({ message, address, network, }) => {
    const connection = await getWalletConnectModalSignClient();
    const session = await connection?.getSession();
    if (!session || !connection) {
        return { error: 'no session or connection' };
    }
    if (network && !wc_aleo_chains.includes(networkToChainId(network))) {
        return { error: `${network} not in wc_aleo_chains` };
    }
    try {
        const response = await connection.request({
            topic: session.topic,
            chainId: network ? networkToChainId(network) : 'aleo:0',
            request: {
                jsonrpc: '2.0',
                method: 'requestSignature',
                params: {
                    message,
                    address: aleoAddressRegex.test(address ?? '') ? address : undefined,
                },
            },
        });
        return response;
    }
    catch (e) {
        console.error('signature error', e);
        const error = e.message;
        return { error };
    }
};
