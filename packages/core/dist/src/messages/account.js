import { hasInjectedConnection } from '../utils/clientInfo.js';
import { SdkError } from '../data/errors.js';
export const getAccount = async () => {
    if (!hasInjectedConnection())
        throw new Error(`getAccount ${SdkError.PuzzleWalletNotDetected}`);
    if (!window.aleo.puzzleWalletClient.getSelectedAccount?.query)
        throw new Error('getSelectedAccount not found!');
    const query = {
        method: 'getSelectedAccount',
    };
    try {
        const response = await window.aleo.puzzleWalletClient.getSelectedAccount.query(query);
        return response;
    }
    catch (e) {
        console.error('getAccount error', e);
        throw e;
    }
};
