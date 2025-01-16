import { createSharedState as _createSharedState, SdkError, } from '@puzzlehq/sdk-core';
import { useInjectedRequest } from './utils/useRequest.js';
import { useIsConnected } from '../provider/connectionProvider.js';
export const useCreateSharedState = () => {
    const { isConnected } = useIsConnected();
    const req = {
        method: 'createSharedState',
    };
    const { request, data: wc_data, error: wc_error, loading, } = useInjectedRequest(req, async () => {
        if (!isConnected)
            throw new Error(SdkError.NotConnected);
        const response = await _createSharedState();
        if (response.error)
            throw new Error(response.error);
        return response;
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
