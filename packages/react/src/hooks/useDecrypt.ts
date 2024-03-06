import { SessionTypes } from '@walletconnect/types';
import { DecryptRequest, DecryptResponse, log_sdk } from '@puzzlehq/sdk-core';
import { useSession } from './wc/useSession.js';
import { useExtensionRequest, useRequest } from './wc/useRequest.js';
import { hasDesktopConnection } from '@puzzlehq/sdk-core';

export const useDecrypt = (ciphertexts?: string[]) => {
  const session: SessionTypes.Struct | undefined = useSession();

  const useRequestFunction = hasDesktopConnection()
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
      chainId: 'aleo:3',
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
