import { hasInjectedConnection } from '../utils/clientInfo.js';
import { SdkError } from '../data/errors.js';
export const getEvent = async ({ id, address, network, }) => {
    if (!hasInjectedConnection())
        throw new Error(`getEvent ${SdkError.PuzzleWalletNotDetected}`);
    if (!window.aleo.puzzleWalletClient.getEvent?.query)
        throw new Error('getEvent.query not found!');
    const query = {
        method: 'getEvent',
        params: {
            id,
            address,
            network,
        },
    };
    try {
        const response = await window.aleo.puzzleWalletClient.getEvent.query(query);
        return response;
    }
    catch (e) {
        console.error('getEvent error', e);
        throw e;
    }
};
