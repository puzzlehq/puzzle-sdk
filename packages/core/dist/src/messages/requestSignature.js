import { hasInjectedConnection } from '../utils/clientInfo.js';
import { SdkError } from '../data/errors.js';
export const requestSignature = async ({ message, address, network, }) => {
    if (!hasInjectedConnection())
        throw new Error(`requestSignature ${SdkError.PuzzleWalletNotDetected}`);
    if (!window.aleo.puzzleWalletClient.requestSignature?.mutate)
        throw new Error('requestSignature.mutate not found!');
    const req = {
        method: 'requestSignature',
        params: {
            message,
            address,
            network,
        },
    };
    try {
        const response = await window.aleo.puzzleWalletClient.requestSignature.mutate(req);
        return response;
    }
    catch (e) {
        console.error('signature error', e);
        throw e;
    }
};
