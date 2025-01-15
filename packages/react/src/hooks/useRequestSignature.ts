import {
  GenericRequest,
  requestSignature as _requestSignature,
  SignatureRequest,
  SignatureResponse,
  log_sdk,
  SdkError,
} from '@puzzlehq/sdk-core';
import { aleoAddressRegex } from '@puzzlehq/types';
import { useInjectedRequest } from './utils/useRequest.js';
import { useIsConnected } from '../provider/PuzzleWalletProvider.js';

export const useRequestSignature = ({
  message,
  address,
  network,
}: SignatureRequest) => {
  const isConnected = useIsConnected();

  const req: GenericRequest = {
    method: 'requestSignature',
    params: {
      message,
      address: aleoAddressRegex.test(address ?? '') ? address : undefined,
      network,
    } as SignatureRequest,
  };

  const {
    request,
    data: wc_data,
    error: wc_error,
    loading,
  } = useInjectedRequest<SignatureResponse | undefined>(
    req,
    async (paramsOverride) => {
      if (!isConnected) throw new Error(SdkError.NotConnected);
      return await _requestSignature(paramsOverride.params as SignatureRequest);
    },
  );

  const error: string | undefined = wc_error
    ? (wc_error as Error).message
    : wc_data && wc_data.error;
  const response: SignatureResponse | undefined = wc_data;

  const requestSignature = (signatureRequestOverride?: SignatureRequest) => {
    if (signatureRequestOverride && isConnected && !loading) {
      log_sdk(
        'useRequestSignature requesting with override...',
        signatureRequestOverride,
      );
      return request({
        method: 'requestSignature',
        params: {
          ...signatureRequestOverride,
        },
      });
    } else if (isConnected && !loading) {
      log_sdk('useRequestSignature requesting...', [message, address]);
      return request();
    }
  };

  return { requestSignature, response, loading, error };
};
