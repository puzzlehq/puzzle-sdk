import { requestSignature as _requestSignature, log_sdk, SdkError, } from '@puzzlehq/sdk-core';
import { aleoAddressRegex } from '@puzzlehq/types';
import { useInjectedRequest } from './utils/useRequest.js';
import { useIsConnected } from '../provider/PuzzleWalletProvider.js';
export const useRequestSignature = ({ message, address, network, }) => {
    const isConnected = useIsConnected();
    const req = {
        method: 'requestSignature',
        params: {
            message,
            address: aleoAddressRegex.test(address ?? '') ? address : undefined,
            network,
        },
    };
    const { request, data: wc_data, error: wc_error, loading, } = useInjectedRequest(req, async (paramsOverride) => {
        if (!isConnected)
            throw new Error(SdkError.NotConnected);
        return await _requestSignature(paramsOverride.params);
    });
    const error = wc_error
        ? wc_error.message
        : wc_data && wc_data.error;
    const response = wc_data;
    const requestSignature = (signatureRequestOverride) => {
        if (signatureRequestOverride && isConnected && !loading) {
            log_sdk('useRequestSignature requesting with override...', signatureRequestOverride);
            return request({
                method: 'requestSignature',
                params: {
                    ...signatureRequestOverride,
                },
            });
        }
        else if (isConnected && !loading) {
            log_sdk('useRequestSignature requesting...', [message, address]);
            return request();
        }
    };
    return { requestSignature, response, loading, error };
};
