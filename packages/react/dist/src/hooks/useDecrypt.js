import { useInjectedRequest } from './utils/useRequest.js';
import { useIsConnected } from '../provider/PuzzleWalletProvider.js';
import { SdkError } from '../../../core/src/data/errors.js';
export const useDecrypt = ({ ciphertexts, address, network }) => {
    const isConnected = useIsConnected();
    const query = {
        method: 'decrypt',
        params: {
            ciphertexts: ciphertexts,
            address,
            network
        },
    };
    const { request, data: wc_data, error: wc_error, loading, } = useInjectedRequest(query, async (params) => {
        if (isConnected) {
            const response = await window.aleo.puzzleWalletClient.decrypt.query(params);
            return response;
        }
        else {
            return { error: SdkError.NotConnected };
        }
    });
    const error = wc_error
        ? wc_error.message
        : wc_data && wc_data.error;
    const response = wc_data;
    const decrypt = async (paramsOverride) => {
        return await request({
            method: 'decrypt',
            params: paramsOverride
        });
    };
    return { decrypt, plaintexts: response?.plaintexts, loading, error };
};
