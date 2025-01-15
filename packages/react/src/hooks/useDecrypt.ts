import {
  DecryptRequest,
  DecryptResponse,
  GenericRequest,
  SdkError,
} from '@puzzlehq/sdk-core';
import { useInjectedRequest } from './utils/useRequest.js';
import { useIsConnected } from '../provider/PuzzleWalletProvider.js';

export const useDecrypt = ({
  ciphertexts,
  address,
  network,
}: DecryptRequest) => {
  const { isConnected } = useIsConnected();

  const req: GenericRequest = {
    method: 'decrypt',
    params: {
      ciphertexts: ciphertexts,
      address,
      network,
    } as DecryptRequest,
  };

  const {
    request,
    data: wc_data,
    error: wc_error,
    loading,
  } = useInjectedRequest<DecryptResponse | undefined>(req, async (params) => {
    if (isConnected) {
      const response: DecryptResponse =
        await window.aleo.puzzleWalletClient.decrypt.query(params);
      return response;
    } else {
      throw new Error(SdkError.NotConnected);
    }
  });

  const error: string | undefined = wc_error
    ? (wc_error as Error).message
    : wc_data && wc_data.error;
  const response: DecryptResponse | undefined = wc_data;

  const decrypt = async (requestOverride?: DecryptRequest) => {
    return await request({
      method: 'decrypt',
      params: requestOverride ?? req,
    });
  };

  return { decrypt, plaintexts: response?.plaintexts, loading, error };
};
