import {
  importSharedState as _importSharedState,
  GenericRequest,
  ImportSharedStateRequest,
  ImportSharedStateResponse,
  SdkError,
} from '@puzzlehq/sdk-core';
import { useInjectedRequest } from './utils/useRequest.js';
import { useIsConnected } from '../provider/PuzzleWalletProvider.js';

export const useImportSharedState = ({ seed }: ImportSharedStateRequest) => {
  const { isConnected } = useIsConnected();

  const req: GenericRequest =     {
    method: 'importSharedState',
    params: {
      seed,
    } as ImportSharedStateRequest,
  }
  
  const {
    request,
    data: wc_data,
    error: wc_error,
    loading,
  } = useInjectedRequest<ImportSharedStateResponse | undefined>(req,
    async (req) => {
      if (!isConnected) throw new Error(SdkError.NotConnected);
      const response = await _importSharedState(req.params as ImportSharedStateRequest)
      if (response.error) throw new Error(response.error);
      return response;
    },
  );

  const error: string | undefined = wc_error
    ? (wc_error as Error).message
    : wc_data && wc_data.error;
  const response: ImportSharedStateResponse | undefined = wc_data;

  const importSharedState = async () => {
    if (isConnected && !loading) {
      return await request();
    }
  };

  return { importSharedState, data: response?.data, loading, error };
};
