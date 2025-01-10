import {
  DecryptRequest,
  DecryptResponse,
  GenericRequest,
} from '@puzzlehq/sdk-core';
import { useInjectedRequest } from './utils/useRequest.js';
import { useIsConnected } from '../provider/PuzzleWalletProvider.js';
import { SdkError } from '../../../core/src/data/errors.js';

export const useDecrypt = ({ciphertexts, address, network}: DecryptRequest) => {
  const isConnected = useIsConnected();

  const query: GenericRequest = {
    method: 'decrypt',
    params: {
      ciphertexts: ciphertexts,
      address,
      network
    } as DecryptRequest,
  };

  const {
    request,
    data: wc_data,
    error: wc_error,
    loading,
  } = useInjectedRequest<DecryptResponse | undefined>(
    query, 
    async (params) => {
      if (isConnected) {
        const response: DecryptResponse = await window.aleo.puzzleWalletClient.decrypt.query(params)
        return response
      } else {
        return { error: SdkError.NotConnected }
      }
    },
  );

  const error: string | undefined = wc_error
    ? (wc_error as Error).message
    : wc_data && wc_data.error;
  const response: DecryptResponse | undefined = wc_data;

  const decrypt = async (paramsOverride: DecryptRequest) => {
    return await request({
      method: 'decrypt',
      params: paramsOverride
    })
  };

  return { decrypt, plaintexts: response?.plaintexts, loading, error };
};
