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
    const { request, data, error: _error, loading, } = useInjectedRequest(req, async (req) => {
        if (!isConnected)
            throw new Error(SdkError.NotConnected);
        const response = await _requestSignature(req.params);
        return response;
    });
    const error = typeof _error === 'string' ? _error : _error instanceof Error ? _error.message : undefined;
    const response = data;
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
