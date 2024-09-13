import { networkToChainId, wc_aleo_chains } from '../index.js';
import { getWalletConnectModalSignClient } from '../client.js';
import { hasInjectedConnection } from '../utils/clientInfo.js';
export const getEvents = async (filter, network) => {
    const connection = await getWalletConnectModalSignClient();
    const session = await connection?.getSession();
    if (!session || !connection) {
        return { events: undefined, error: 'no session or connection' };
    }
    if (filter?.programId === '') {
        filter.programId = undefined;
    }
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
            method: 'getEvents',
            params: {
                filter,
                page: 0,
            },
        },
    };
    if (hasInjectedConnection()) {
        try {
            const response = await window.aleo.puzzleWalletClient.getEvents.query(query);
            return response;
        }
        catch (e) {
            console.error('getEvents error', e);
            const error = e.message;
            return { error };
        }
    }
    const fetchPage = async (page = 0) => {
        const response = await connection.request(query);
        return response;
    };
    try {
        const response = await fetchPage();
        return response;
    }
    catch (e) {
        console.error('getEvents error', e);
        const error = e.message;
        return { error };
    }
};
