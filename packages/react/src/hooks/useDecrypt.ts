import { SessionTypes } from '@walletconnect/types';
import {
  DecryptRequest,
  DecryptResponse,
  hasInjectedConnection,
  log_sdk,
} from '@puzzlehq/sdk-core';
import { useInjectedRequest, useRequest } from './wc/useRequest.js';
import { useWalletSession } from '../provider/PuzzleWalletProvider.js';
import { useWalletStore } from '../store.js';

export const useDecrypt = (ciphertexts?: string[]) => {
  const session: SessionTypes.Struct | undefined = useWalletSession();
  const [chainIdStr] = useWalletStore((state) => [state.chainIdStr]);

  const useRequestFunction = hasInjectedConnection()
    ? useInjectedRequest
    : useRequest;

  const {
    request,
    data: wc_data,
    error: wc_error,
    loading,
  } = useRequestFunction<DecryptResponse | undefined>(
    {
      topic: session?.topic ?? '',
      chainId: chainIdStr,
      request: {
        jsonrpc: '2.0',
        method: 'decrypt',
        params: {
          ciphertexts: ciphertexts!,
        } as DecryptRequest,
      },
    },
    (params) => window.aleo.puzzleWalletClient.decrypt.query(params),
  );

  const error: string | undefined = wc_error
    ? (wc_error as Error).message
    : wc_data && wc_data.error;
  const response: DecryptResponse | undefined = wc_data;

  const decrypt = (decryptRequestOverride?: DecryptRequest) => {
    if (decryptRequestOverride && session && !loading) {
      log_sdk('useDecrypt requesting with override...', decryptRequestOverride);
      return request({
        topic: session?.topic ?? '',
        chainId: chainIdStr,
        request: {
          jsonrpc: '2.0',
          method: 'decrypt',
          params: { ...decryptRequestOverride },
        },
      });
    } else if (ciphertexts && session && !loading) {
      log_sdk('useDecrypt requesting...', ciphertexts);
      return request();
    }
  };

  return { decrypt, plaintexts: response?.plaintexts, loading, error };
};
