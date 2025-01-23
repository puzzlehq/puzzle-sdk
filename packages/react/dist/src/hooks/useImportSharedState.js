import { importSharedState as _importSharedState, SdkError, } from '@puzzlehq/sdk-core';
import { useInjectedRequest } from './utils/useRequest.js';
import { useIsConnected } from '../provider/PuzzleWalletProvider.js';
export const useImportSharedState = ({ seed }) => {
    const { isConnected } = useIsConnected();
    const req = {
        method: 'importSharedState',
        params: {
            seed,
        },
    };
    const { request, data, error: _error, loading, } = useInjectedRequest(req, async (req) => {
        if (!isConnected)
            throw new Error(SdkError.NotConnected);
        const response = await _importSharedState(req.params);
        return response;
    });
    const error = typeof _error === 'string' ? _error : _error instanceof Error ? _error.message : undefined;
    const response = data;
    const importSharedState = async () => {
        if (isConnected && !loading) {
            return await request();
        }
    };
    return { importSharedState, data: response?.data, loading, error };
};
