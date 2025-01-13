import { importSharedState as _importSharedState, } from '@puzzlehq/sdk-core';
import { useInjectedRequest } from './utils/useRequest.js';
import { useIsConnected } from '../provider/PuzzleWalletProvider.js';
export const useImportSharedState = ({ seed }) => {
    const isConnected = useIsConnected();
    const { request, data: wc_data, error: wc_error, loading, } = useInjectedRequest({
        method: 'importSharedState',
        params: {
            seed,
        },
    }, async () => await _importSharedState({ seed }));
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
