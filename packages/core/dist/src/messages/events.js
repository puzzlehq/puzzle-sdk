import { hasInjectedConnection } from '../utils/clientInfo.js';
import { SdkError } from '../data/errors.js';
export const getEvents = async ({ filter, page = 0, address, network, }) => {
    if (!hasInjectedConnection())
        throw new Error(`getEvents ${SdkError.PuzzleWalletNotDetected}`);
    if (!window.aleo.puzzleWalletClient.getEvents?.query)
        throw new Error('getEvents.query not found!');
    const query = {
        method: 'getEvents',
        params: {
            filter,
            page,
            address,
            network,
        },
    };
    try {
        const response = await window.aleo.puzzleWalletClient.getEvents.query(query);
        return response;
    }
    catch (e) {
        console.error('getEvents error', e);
        throw e;
    }
};
