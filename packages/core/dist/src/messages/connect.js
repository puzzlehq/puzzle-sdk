import { hasInjectedConnection } from '../utils/clientInfo.js';
import { SdkError } from '../data/errors.js';
export const connect = async (request) => {
    if (!hasInjectedConnection())
        throw new Error(SdkError.PuzzleWalletNotDetected);
    if (!window.aleo.puzzleWalletClient.connect?.mutate)
        throw new Error('connect.mutate not found!');
    try {
        const connectRequest = {
            method: 'connect',
            params: request,
        };
        const connectResponse = await window.aleo.puzzleWalletClient.connect.mutate(connectRequest);
        return connectResponse;
    }
    catch (e) {
        console.error('connect error', e);
        throw e;
    }
};
