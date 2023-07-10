import useClientWalletStore from './clientWalletStore.js';
import { useRequest } from '@web3modal/sign-react';
import { ProofRequestDataJson } from '../proof_request_data.js';
import { CreateProofsResMessage } from './index.js';

export const usePuzzleRequestProofs = (
  proofRequestData?: ProofRequestDataJson
) => {
  const [session, chainId] = useClientWalletStore((state) => [
    state.session,
    state.chainId,
  ]);

  let data: CreateProofsResMessage;

  const {
    request,
    data: _data,
    error,
    loading,
  } = useRequest({
    topic: session?.topic ?? '',
    chainId: chainId ?? 'aztec:1337',
    request: {
      id: 1,
      jsonrpc: '2.0',
      method: 'aleo_requestProofs',
      params: proofRequestData,
    },
  });

  data = _data;

  return { request, data, error, loading };
};

export {
  type CreateProofsResMessage,
  type CreateProofsResData,
} from '../../../../apps/wallet/src/messaging/index.js';
