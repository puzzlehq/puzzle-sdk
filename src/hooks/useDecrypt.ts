import { SessionTypes } from '@walletconnect/types';
import { DecryptRequest, DecryptResponse} from '../messages/decrypt.js';
import { log_sdk } from '../utils/logger.js';
import { useSession } from '../index.js';
import { useRequest } from './wc/useReact.js';

export const useDecrypt = (
  ciphertexts?: string[]
) => {
  log_sdk('useDecrypt', ciphertexts);
  const session: SessionTypes.Struct | undefined = useSession();

  const { request, data: wc_data, error: wc_error, loading } = useRequest({
    topic: session?.topic ?? '',
    chainId: 'aleo:1',
    request: {
      id: 1,
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
    if (ciphertexts) {
      request();
    }
  }

  return { decrypt, plaintexts: response?.plaintexts, loading, error };
};