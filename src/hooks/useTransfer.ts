import useClientWalletStore from './clientWalletStore.js';
import { useRequest } from '@walletconnect/modal-sign-react';

export interface TransferRequestData {
  assetId: String;
  recipient: String;
  value: number;
}

export const useTransferCredits = (
  transferRequestData?: TransferRequestData
) => {
  const [session, chainId] = useClientWalletStore((state) => [
    state.session,
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
