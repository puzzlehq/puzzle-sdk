import { hasInjectedConnection } from '../utils/clientInfo.js';
import { SdkError } from '../data/errors.js';
export const importSharedState = async ({ seed, }) => {
    if (!hasInjectedConnection())
        throw new Error(`importSharedState ${SdkError.PuzzleWalletNotDetected}`);
    if (!window.aleo.puzzleWalletClient.importSharedState?.mutate)
        throw new Error('importSharedState.mutate not found!');
    const query = {
        method: 'importSharedState',
        params: {
            seed,
        },
    };
    try {
        const response = await window.aleo.puzzleWalletClient.importSharedState.mutate(query);
        return response;
    }
    catch (e) {
        console.error('importSharedState error', e);
        throw e;
    }
};
