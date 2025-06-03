import { hasInjectedConnection } from '../utils/clientInfo.js';
import { SdkError } from '../data/errors.js';
export const createSharedState = async () => {
    if (!hasInjectedConnection())
        throw new Error(`createSharedState ${SdkError.PuzzleWalletNotDetected}`);
    if (!window.aleo.puzzleWalletClient.createSharedState?.mutate)
        throw new Error('createSharedState.mutate not found!');
    const query = {
        method: 'createSharedState',
    };
    try {
        const response = await window.aleo.puzzleWalletClient.createSharedState.mutate(query);
        return response;
    }
    catch (e) {
        console.error('createSharedState error', e);
        throw e;
    }
};
