import { SessionTypes } from '@walletconnect/types';
import {
  DecryptRequest,
  DecryptResponse,
  hasInjectedConnection,
  log_sdk,
} from '@puzzlehq/sdk-core';
import { useExtensionRequest, useRequest } from './wc/useRequest.js';
import { useWalletSession } from '../provider/PuzzleWalletProvider.js';
import { useWalletStore } from '../store.js';

export const useDecrypt = (ciphertexts?: string[]) => {
  const session: SessionTypes.Struct | undefined = useWalletSession();
  const [account] = useWalletStore((state) => [state.account]);

  const useRequestFunction = hasInjectedConnection()
    ? useExtensionRequest
    : useRequest;

  const {
    request,
    data: wc_data,
    error: wc_error,
    loading,
  } = useRequestFunction<DecryptResponse | undefined>(
    {
      topic: session?.topic ?? '',
      chainId: account ? `${account.network}:${account.chainId}` : 'aleo:1',
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

  const decrypt = () => {
    log_sdk('useDecrypt', ciphertexts);
    if (ciphertexts && session && !loading) {
      request();
    }
  };

  return { decrypt, plaintexts: response?.plaintexts, loading, error };
};
