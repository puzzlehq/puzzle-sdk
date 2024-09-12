import { hasInjectedConnection, log_sdk, } from '@puzzlehq/sdk-core';
import { useInjectedRequest, useRequest } from './wc/useRequest.js';
import { useWalletSession } from '../provider/PuzzleWalletProvider.js';
import { useWalletStore } from '../store.js';
export const useDecrypt = (ciphertexts) => {
    const session = useWalletSession();
    const [chainIdStr] = useWalletStore((state) => [state.chainIdStr]);
    const useRequestFunction = hasInjectedConnection()
        ? useInjectedRequest
        : useRequest;
    const { request, data: wc_data, error: wc_error, loading, } = useRequestFunction({
        topic: session?.topic ?? '',
        chainId: chainIdStr,
        request: {
            jsonrpc: '2.0',
            method: 'decrypt',
            params: {
                ciphertexts: ciphertexts,
            },
        },
    }, (params) => window.aleo.puzzleWalletClient.decrypt.query(params));
    const error = wc_error
        ? wc_error.message
        : wc_data && wc_data.error;
    const response = wc_data;
    const decrypt = (decryptRequestOverride) => {
        if (decryptRequestOverride && session && !loading) {
            log_sdk('useDecrypt requesting with override...', decryptRequestOverride);
            return request({
                topic: session?.topic ?? '',
                chainId: chainIdStr,
                request: {
                    jsonrpc: '2.0',
                    method: 'decrypt',
                    params: { ...decryptRequestOverride },
                },
            });
        }
        else if (ciphertexts && session && !loading) {
            log_sdk('useDecrypt requesting...', ciphertexts);
            return request();
        }
    };
    return { decrypt, plaintexts: response?.plaintexts, loading, error };
};
