import { useEffect } from 'react';
import {
  AccountSyncedResponse,
  GenericRequest,
  GetBalancesRequest,
  GetBalancesResponse,
} from '@puzzlehq/sdk-core';
import { Balance } from '@puzzlehq/types';
import { useInjectedRequestQuery } from './utils/useRequest.js';
import { useWalletStore } from '../store.js';
import useInjectedSubscriptions from './utils/useInjectedSubscription.js';
import { useIsConnected } from '../provider/PuzzleWalletProvider.js';
import { useShallow } from 'zustand/react/shallow';

export const useBalance = ({ address, network, multisig }: GetBalancesRequest = {}) => {
  const {isConnected} = useIsConnected();
  const [account] = useWalletStore(useShallow((state) => [state.account]));

  const query: GenericRequest = {
    method: 'getBalance',
    params: {
      address,
    } as GetBalancesRequest,
  };

  const {
    refetch,
    data,
    error: _error,
    isLoading: loading,
  } = useInjectedRequestQuery<GetBalancesResponse | undefined>({
    queryKey: [
      'useBalance',
      address,
      account?.address ?? '',
      network,
      multisig,
    ],
    enabled: !!isConnected,
    fetchFunction: async () => {
      const response: GetBalancesResponse =
        await window.aleo.puzzleWalletClient.getBalance.query(query);
      return response;
    },
  });

  // listen for injected wallet-originating account updates
  useInjectedSubscriptions({
    configs: [
      {
        subscriptionName: 'onSelectedAccountSynced',
        condition: () => {
          return !multisig;
        },
        onData: () => refetch(),
        onError: (e: Error) => {
          console.error(e)
        },
        dependencies: [multisig],
      },
      {
        subscriptionName: 'onSharedAccountSynced',
        condition: (data: AccountSyncedResponse) => {
          return !!multisig && data?.address === address;
        },
        onData: () => refetch(),
        onError: (e: Error) => {
          console.error(e)
        },
        dependencies: [multisig, address],
      },
    ],
  });

  // send initial balance request...
  useEffect(() => {
    if (isConnected && !loading) {
      refetch();
    }
  }, [isConnected]);

  const error: string | undefined = _error
    ? (_error as Error).message
    : data && data.error;
  const response: GetBalancesResponse | undefined = data;
  const balances: Balance[] | undefined = response?.balances;

  return { balances, error, loading };
};
