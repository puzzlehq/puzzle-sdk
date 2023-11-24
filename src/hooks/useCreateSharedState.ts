import { SessionTypes } from '@walletconnect/types';
import { CreateSharedStateResponse, useSession } from '../index.js';
import { useRequest } from './wc/useReact.js';

export const useCreateSharedState = () => {
  const session: SessionTypes.Struct = useSession();

  const { request, data: wc_data, error: wc_error, loading } = useRequest({
    topic: session?.topic ?? '',
    chainId: 'aleo:1',
    request: {
      id: 1,
      jsonrpc: '2.0',
      method: 'createSharedState',
      params: {},
    },
  });

  const error: string | undefined  = wc_error ? (wc_error as Error).message : (wc_data && wc_data.error);
  const response: CreateSharedStateResponse | undefined =  wc_data;

  const createSharedState = () => {
    request();
  };

  return { createSharedState, data: response.data, loading, error };
};