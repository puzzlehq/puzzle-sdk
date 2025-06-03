import { hasInjectedConnection } from '../utils/clientInfo.js';
import { SdkError } from '../data/errors.js';
export const getRecords = async ({ filter, page = 0, address, network, }) => {
    if (!hasInjectedConnection())
        throw new Error(`getRecords ${SdkError.PuzzleWalletNotDetected}`);
    if (!window.aleo.puzzleWalletClient.getRecords?.query)
        throw new Error('getRecords.query not found!');
    const query = {
        method: 'getRecords',
        params: {
            filter,
            page,
            address,
            network,
        },
    };
    try {
        const response = await window.aleo.puzzleWalletClient.getRecords.query(query);
        return response;
    }
    catch (e) {
        console.error('getRecords error', e);
        throw e;
    }
};
