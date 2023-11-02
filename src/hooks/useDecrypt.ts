import useClientWalletStore from './clientWalletStore.js';
import { useRequest, useSession } from '@walletconnect/modal-sign-react';
import { SessionTypes } from '@walletconnect/types';
import { DecryptRequest, DecryptResponse} from '../messaging/decrypt.js';
import { log_sdk } from '../utils/logger.js';

export const useDecrypt = (
  ciphertexts?: string[]
) => {
  log_sdk('useDecrypt', ciphertexts);
  const session: SessionTypes.Struct | undefined = useSession();
  const [chainId] = useClientWalletStore((state) => [
    state.chainId,
  ]);

  const { request, data: wc_data, error: wc_error, loading } = useRequest({
    topic: session?.topic ?? '',
    chainId: chainId,
    request: {
      id: 1,
      jsonrpc: '2.0',
      method: 'decrypt',
      params: {
        ciphertexts: ciphertexts!
      } as DecryptRequest,
    },
  });

  const error: string | undefined  = wc_error ? wc_error.message : (wc_data && wc_data.error);
  const response: DecryptResponse | undefined =  wc_data;

  const decrypt = () => {
    if (ciphertexts) {
      request();
    }
  }

  return { decrypt, plaintexts: response?.plaintexts, loading, error };
};
