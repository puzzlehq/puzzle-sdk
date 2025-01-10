import { hasInjectedConnection } from '../utils/clientInfo.js';
import { SdkError } from '../data/errors.js';
export const getBalance = async ({ address, network }) => {
    if (!hasInjectedConnection())
        throw new Error(SdkError.PuzzleWalletNotDetected);
    if (!window.aleo.puzzleWalletClient.getBalance?.query)
        throw new Error('getSelectedAccount not found!');
    const query = {
        request: {
            method: 'getBalance',
            params: {
                address,
                network,
            },
        },
    };
    try {
        const response = await window.aleo.puzzleWalletClient.getBalance.query(query);
        return response;
    }
    catch (e) {
        const error = e.message;
        console.error('getBalance error', e);
        return { error };
    }
};
