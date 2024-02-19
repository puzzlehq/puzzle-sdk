import { SessionTypes } from '@walletconnect/types';
import { DecryptRequest, DecryptResponse, log_sdk} from '@puzzlehq/sdk-core';
import { useSession } from './wc/useSession.js';
import { useRequest } from './wc/useRequest.js';

export const useDecrypt = (
  ciphertexts?: string[]
) => {
  log_sdk('useDecrypt', ciphertexts);
  const session: SessionTypes.Struct | undefined = useSession();

  const { request, data: wc_data, error: wc_error, loading } = useRequest<DecryptResponse | undefined>({
    topic: session?.topic ?? '',
    chainId: 'aleo:1',
    request: {
      jsonrpc: '2.0',
      method: 'decrypt',
      params: {
        ciphertexts: ciphertexts!
      } as DecryptRequest,
    },
  });

  const error: string | undefined  = wc_error ? (wc_error as Error).message : (wc_data && wc_data.error);
  const response: DecryptResponse | undefined =  wc_data;

  const decrypt = () => {
    if (ciphertexts && session && !loading) {
      request();
    }
  }

  return { decrypt, plaintexts: response?.plaintexts, loading, error };
};