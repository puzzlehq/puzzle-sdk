import { hasInjectedConnection } from '../utils/clientInfo.js';
import { SdkError } from '../data/errors.js';
export const decrypt = async ({ ciphertexts, network, address, }) => {
    if (!hasInjectedConnection())
        throw new Error(`decrypt ${SdkError.PuzzleWalletNotDetected}`);
    if (!window.aleo.puzzleWalletClient.decrypt?.query)
        throw new Error('decrypt.query not found!');
    const query = {
        method: 'decrypt',
        params: {
            ciphertexts: ciphertexts,
            address,
            network,
        },
    };
    try {
        const response = await window.aleo.puzzleWalletClient.decrypt.query(query);
        return response;
    }
    catch (e) {
        const error = e.message;
        console.error('decrypt error', e);
        throw e;
    }
};
