import useClientWalletStore from './clientWalletStore.js';
import { useRequest, useSession } from '@walletconnect/modal-sign-react';
import { SessionTypes } from '@walletconnect/types';
import { SignatureRequest, SignatureResponse } from '../index.js';

export const useSignature = (message: string, address: string) => {
  const session: SessionTypes.Struct = useSession();
  const [chainId] = useClientWalletStore((state) => [
    state.chainId,
  ]);

  const { request, data: wc_data, error: wc_error, loading } = useRequest({
    topic: session?.topic ?? '',
    chainId: chainId,
    request: {
      id: 1,
      jsonrpc: '2.0',
      method: 'requestSignature',
      params: {
        message,
        address
      } as SignatureRequest,
    },
  });

  const error: string | undefined  = wc_error ? wc_error.message : (wc_data && wc_data.error);
  const response: SignatureResponse | undefined =  wc_data;

  const requestSignature = () => {
    request();
  };

  return { requestSignature, signature: response?.signature, loading, error };
};