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
    const { request, data: wc_data, error: wc_error, loading, } = useInjectedRequest(req, async (req) => {
        if (!isConnected)
            throw new Error(SdkError.NotConnected);
        const response = await _importSharedState(req.params);
        if (response.error)
            throw new Error(response.error);
        return response;
    });
    const error = wc_error
        ? wc_error.message
        : wc_data && wc_data.error;
    const response = wc_data;
    const importSharedState = async () => {
        if (isConnected && !loading) {
            return await request();
        }
    };
    return { importSharedState, data: response?.data, loading, error };
};
