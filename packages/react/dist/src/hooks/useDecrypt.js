import { SdkError } from '@puzzlehq/sdk-core';
import { useInjectedRequest } from './utils/useRequest.js';
import { useIsConnected } from '../provider/PuzzleWalletProvider.js';
export const useDecrypt = ({ ciphertexts, address, network }) => {
    const isConnected = useIsConnected();
    const req = {
        method: 'decrypt',
        params: {
            ciphertexts: ciphertexts,
            address,
            network
        },
    };
    const { request, data: wc_data, error: wc_error, loading, } = useInjectedRequest(req, async (params) => {
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
    const decrypt = async (requestOverride) => {
        return await request({
            method: 'decrypt',
            params: requestOverride ?? req
        });
    };
    return { decrypt, plaintexts: response?.plaintexts, loading, error };
};
