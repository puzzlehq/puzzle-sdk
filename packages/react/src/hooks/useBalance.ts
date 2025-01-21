import { useEffect } from 'react';
import {
  AccountSyncedResponse,
  GenericRequest,
  getBalance,
  GetBalancesRequest,
  GetBalancesResponse,
} from '@puzzlehq/sdk-core';
import { Balance } from '@puzzlehq/types';
import { useInjectedRequestQuery } from './utils/useRequest.js';
import { useWalletStore } from '../store.js';
import useInjectedSubscriptions from './utils/useInjectedSubscription.js';
import { useIsConnected } from '../provider/PuzzleWalletProvider.js';

export const useBalance = ({
  address,
  network,
  multisig,
}: GetBalancesRequest = {}) => {
  const { isConnected } = useIsConnected();
  const [account] = useWalletStore((state) => [state.account]);

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
      return await getBalance({ address, network });
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
          console.error(e);
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
          console.error(e);
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

  const error: string | undefined = (_error as Error)?.message ?? undefined;

  const response: GetBalancesResponse | undefined = data;
  const balances: Balance[] | undefined = response?.balances;

  return { balances, error, loading };
};
