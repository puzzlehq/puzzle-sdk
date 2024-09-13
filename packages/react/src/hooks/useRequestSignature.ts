import { SessionTypes } from '@walletconnect/types';
import {
  SignatureRequest,
  SignatureResponse,
  log_sdk,
} from '@puzzlehq/sdk-core';
import { aleoAddressRegex } from '@puzzlehq/types';
import { useRequest } from './wc/useRequest.js';
import { useWalletSession } from '../provider/PuzzleWalletProvider.js';
import { useWalletStore } from '../store.js';

export const useRequestSignature = ({
  message,
  address,
  network,
}: SignatureRequest) => {
  const session: SessionTypes.Struct | undefined = useWalletSession();
  const [chainIdStr] = useWalletStore((state) => [state.chainIdStr]);

  const {
    request,
    data: wc_data,
    error: wc_error,
    loading,
  } = useRequest<SignatureResponse | undefined>({
    topic: session?.topic ?? '',
    chainId: chainIdStr,
    request: {
      jsonrpc: '2.0',
      method: 'requestSignature',
      params: {
        message,
        address: aleoAddressRegex.test(address ?? '') ? address : undefined,
      } as SignatureRequest,
    },
  });

  const error: string | undefined = wc_error
    ? (wc_error as Error).message
    : wc_data && wc_data.error;
  const response: SignatureResponse | undefined = wc_data;

  const requestSignature = (signatureRequestOverride?: SignatureRequest) => {
    if (signatureRequestOverride && session && !loading) {
      log_sdk(
        'useRequestSignature requesting with override...',
        signatureRequestOverride,
      );
      return request({
        topic: session.topic,
        chainId: chainIdStr,
        request: {
          jsonrpc: '2.0',
          method: 'requestSignature',
          params: {
            ...signatureRequestOverride,
          },
        },
      });
    } else if (session && !loading) {
      log_sdk('useRequestSignature requesting...', [message, address]);
      return request();
    }
  };

  return { requestSignature, response, loading, error };
};
