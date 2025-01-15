import { SdkError, } from '@puzzlehq/sdk-core';
import { useInjectedRequest } from './utils/useRequest.js';
import { useIsConnected } from '../provider/PuzzleWalletProvider.js';
export const useCreateSharedState = () => {
    const { isConnected } = useIsConnected();
    const query = {
        method: 'createSharedState',
    };
    const { request, data: wc_data, error: wc_error, loading, } = useInjectedRequest(query, async (params) => {
        if (isConnected) {
            const response = await window.aleo.puzzleWalletClient.createSharedState.mutate(params);
            return response;
        }
        else {
            throw new Error(SdkError.NotConnected);
        }
    });
    const error = wc_error
        ? wc_error.message
        : wc_data && wc_data.error;
    const response = wc_data;
    const createSharedState = async () => {
        return await request();
    };
    return { createSharedState, data: response?.data, loading, error };
};
