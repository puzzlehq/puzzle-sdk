import useClientWalletStore from './clientWalletStore.js';
import { useRequest, useSession } from '@walletconnect/modal-sign-react';
import { SessionTypes } from '@walletconnect/types';
import { TransferRequestData } from '../index.js';

export const useTransferCredits = (
  transferRequestData?: TransferRequestData
) => {
  const session: SessionTypes.Struct = useSession();
  const [chainId] = useClientWalletStore((state) => [
    state.chainId,
  ]);

  // TODO: (darvish) Make this real
  const { request: transfer, data, error, loading } = useRequest({
    topic: session?.topic ?? '',
    chainId: chainId ?? 'aleo:1',
    request: {
      id: 1,
      jsonrpc: '2.0',
      method: 'aleo_transfer',
      params: transferRequestData,
    },
  });

  return { transfer, data, error, loading };
};
