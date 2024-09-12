import { hasInjectedConnection, } from '@puzzlehq/sdk-core';
import { useInjectedRequest, useRequest } from './wc/useRequest.js';
import { useWalletSession } from '../provider/PuzzleWalletProvider.js';
import { useWalletStore } from '../store.js';
export const useCreateSharedState = () => {
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
            method: 'createSharedState',
            params: {},
        },
    }, (params) => window.aleo.puzzleWalletClient.createSharedState.mutate(params));
    const error = wc_error
        ? wc_error.message
        : wc_data && wc_data.error;
    const response = wc_data;
    const createSharedState = async () => {
        return await request();
    };
    return { createSharedState, data: response?.data, loading, error };
};
