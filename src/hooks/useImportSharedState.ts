import useClientWalletStore from './clientWalletStore.js';
import { useRequest, useSession } from '@walletconnect/modal-sign-react';
import { SessionTypes } from '@walletconnect/types';
import { ImportSharedStateRequest, ImportSharedStateResponse } from '../index.js';

export const useImportSharedState = (seed: string) => {
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
      method: 'importSharedState',
      params: {
        seed
      } as ImportSharedStateRequest,
    },
  });

  const error: string | undefined  = wc_error ? wc_error.message : (wc_data && wc_data.error);
  const response: ImportSharedStateResponse | undefined =  wc_data;

  const importSharedState = () => {
    if (!session) return;
    request();
  };

  return { importSharedState, address: response?.address, loading, error };
};