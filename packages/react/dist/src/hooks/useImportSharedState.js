import { hasInjectedConnection, } from '@puzzlehq/sdk-core';
import { useInjectedRequest, useRequest } from './wc/useRequest.js';
import { useWalletSession } from '../provider/PuzzleWalletProvider.js';
import { useWalletStore } from '../store.js';
export const useImportSharedState = (seed) => {
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
            method: 'importSharedState',
            params: {
                seed,
            },
        },
    }, (params) => window.aleo?.puzzleWalletClient.importSharedState.mutate(params));
    const error = wc_error
        ? wc_error.message
        : wc_data && wc_data.error;
    const response = wc_data;
    const importSharedState = async () => {
        if (session && !loading) {
            return await request();
        }
    };
    return { importSharedState, data: response?.data, loading, error };
};
