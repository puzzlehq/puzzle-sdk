import { SessionTypes } from '@walletconnect/types';
import { ImportSharedStateRequest, ImportSharedStateResponse, useSession } from '../index.js';
import { useRequest } from './wc/useRequest.js';

export const useImportSharedState = (seed: string) => {
  const session: SessionTypes.Struct | undefined = useSession();

  const { request, data: wc_data, error: wc_error, loading } = useRequest<ImportSharedStateResponse | undefined>({
    topic: session?.topic ?? '',
    chainId: 'aleo:1',
    request: {
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
    if (session && !loading) {
      request();
    }
  };

  return { importSharedState, data: response?.data, loading, error };
};