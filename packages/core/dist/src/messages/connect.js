import { hasInjectedConnection } from '../utils/clientInfo.js';
import { SdkError } from '../data/errors.js';
export const connect = async (request) => {
    if (!hasInjectedConnection())
        throw new Error(SdkError.PuzzleWalletNotDetected);
    if (!window.aleo.puzzleWalletClient.connect.mutate)
        throw new Error('Connect method not found!');
    try {
        const connectResponse = await window.aleo.puzzleWalletClient.connect.mutate(request);
        return connectResponse;
    }
    catch (e) {
        console.error('connect error', e);
        return { error: e.message };
    }
};
