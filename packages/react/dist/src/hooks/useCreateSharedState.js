import { createSharedState as _createSharedState, SdkError, } from '@puzzlehq/sdk-core';
import { useInjectedRequest } from './utils/useRequest.js';
import { useIsConnected } from '../provider/connectionProvider.js';
export const useCreateSharedState = () => {
    const { isConnected } = useIsConnected();
    const req = {
        method: 'createSharedState',
    };
    const { request, data, error: _error, loading, } = useInjectedRequest(req, async () => {
        if (!isConnected)
            throw new Error(SdkError.NotConnected);
        const response = await _createSharedState();
        return response;
    });
    const error = typeof _error === 'string' ? _error : _error instanceof Error ? _error.message : undefined;
    const response = data;
    const createSharedState = async () => {
        return await request();
    };
    return { createSharedState, data: response?.data, loading, error };
};
