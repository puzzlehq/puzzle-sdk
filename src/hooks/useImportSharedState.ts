import { SessionTypes } from '@walletconnect/types';
import { ImportSharedStateRequest, ImportSharedStateResponse, useSession } from '../index.js';
import { useRequest } from './wc/useReact.js';

export const useImportSharedState = (seed: string) => {
  const session: SessionTypes.Struct = useSession();

  const { request, data: wc_data, error: wc_error, loading } = useRequest({
    topic: session?.topic ?? '',
    chainId: 'aleo:1',
    request: {
      id: 1,
      jsonrpc: '2.0',
      method: 'importSharedState',
      params: {
        seed
      } as ImportSharedStateRequest,
    },
  });

  const error: string | undefined  = wc_error ? (wc_error as Error).message : (wc_data && wc_data.error);
  const response: ImportSharedStateResponse | undefined =  wc_data;

  const importSharedState = () => {
    request();
  };

  return { importSharedState, data: response?.data, loading, error };
};