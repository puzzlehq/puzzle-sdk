import { hasInjectedConnection } from '../utils/clientInfo.js';
import { SdkError } from '../data/errors.js';
export const getBalance = async ({ address, network, multisig, }) => {
    if (!hasInjectedConnection())
        throw new Error(`getBalance ${SdkError.PuzzleWalletNotDetected}`);
    if (!window.aleo.puzzleWalletClient.getBalance?.query)
        throw new Error('getBalance.query not found!');
    const query = {
        method: 'getBalance',
        params: {
            address,
            network,
            multisig,
        },
    };
    try {
        const response = await window.aleo.puzzleWalletClient.getBalance.query(query);
        return response;
    }
    catch (e) {
        console.error('getBalance error', e);
        throw e;
    }
};
