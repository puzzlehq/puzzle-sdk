import { SessionTypes } from '@walletconnect/types';
import {
  SignatureRequest,
  SignatureResponse,
  log_sdk,
} from '@puzzlehq/sdk-core';
import { aleoAddressRegex } from '@puzzlehq/types';
import { useRequest } from './wc/useRequest.js';
import { useWalletSession } from '../provider/PuzzleWalletProvider.js';

export const useRequestSignature = (message: string, address?: string) => {
  const session: SessionTypes.Struct | undefined = useWalletSession();

  const {
    request,
    data: wc_data,
    error: wc_error,
    loading,
  } = useRequest<SignatureResponse | undefined>({
    topic: session?.topic ?? '',
    chainId: 'aleo:1',
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

  const requestSignature = () => {
    if (session && !loading) {
      log_sdk('useRequestSignature requesting...', [message, address]);
      request();
    }
  };

  return { requestSignature, response, loading, error };
};
