import { SessionTypes } from '@walletconnect/types';
import { CreateSharedStateResponse, useSession } from '../index.js';
import { useRequest } from './wc/useRequest.js';

export const useCreateSharedState = () => {
  const session: SessionTypes.Struct | undefined = useSession();

  const { request, data: wc_data, error: wc_error, loading } = useRequest<CreateSharedStateResponse | undefined>({
    topic: session?.topic ?? '',
    chainId: 'aleo:1',
    request: {
      jsonrpc: '2.0',
      method: 'createSharedState',
      params: {},
    },
  });

  const error: string | undefined  = wc_error ? (wc_error as Error).message : (wc_data && wc_data.error);
  const response: CreateSharedStateResponse | undefined =  wc_data;

  const createSharedState = () => {
    if (session && !loading) {
      request();
    }
  };

  return { createSharedState, data: response?.data, loading, error };
};