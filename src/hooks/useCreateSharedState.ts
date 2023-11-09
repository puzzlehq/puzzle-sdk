import useClientWalletStore from './clientWalletStore.js';
import { useRequest, useSession } from '@walletconnect/modal-sign-react';
import { SessionTypes } from '@walletconnect/types';
import { CreateSharedStateResponse } from '../index.js';

export const useCreateSharedState = async () => {
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
      method: 'createSharedState',
      params: {},
    },
  });

  const error: string | undefined  = wc_error ? wc_error.message : (wc_data && wc_data.error);
  const response: CreateSharedStateResponse | undefined =  wc_data;

  const createSharedState = () => {
    request();
  };

  return { createSharedState, seed: response?.seed, loading, error };
};
