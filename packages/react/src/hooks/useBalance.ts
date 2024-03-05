import { useEffect } from 'react';
import {
  Balance,
  GetBalancesRequest,
  GetBalancesResponse,
  hasDesktopConnection
} from '@puzzlehq/sdk-core';
import { SessionTypes } from '@walletconnect/types';
import { useSession } from './wc/useSession.js';
import { useOnSessionEvent } from './wc/useOnSessionEvent.js';
import { useExtensionRequestQuery, useRequestQuery } from './wc/useRequest.js';
import { useWalletStore } from '../store.js';

type UseBalanceParams = {
  address?: string;
  multisig?: boolean;
};

export const useBalance = ({ address, multisig }: UseBalanceParams) => {
  const session: SessionTypes.Struct | undefined = useSession();
  const [account] = useWalletStore((state) => [state.account]);

  const useQueryFunction = hasDesktopConnection()
    ? useExtensionRequestQuery
    : useRequestQuery;

  const query = {
    topic: session?.topic,
    chainId: 'aleo:3',
    request: {
      jsonrpc: '2.0',
      method: 'getBalance',
      params: {
        assetId: undefined,
        address,
      } as GetBalancesRequest,
    },
  };

  const {
    refetch,
    data: wc_data,
    error: wc_error,
    isLoading: loading,
  } = useQueryFunction<GetBalancesResponse | undefined>({
    queryKey: [
      'useBalance',
      address,
      account?.address ?? '',
      multisig,
      session?.topic,
    ],
    enabled: !!session && !!account && (multisig ? !!address : true),
    fetchFunction: async () => {
      const response: GetBalancesResponse =
        await window.aleo.puzzleWalletClient.getBalance.query(query);
      return response;
    },
    wcParams: query,
  });

  useOnSessionEvent(({ params, topic }) => {
    const eventName = params.event.name;
    const _address = params.event.address ?? params.event.data.address;
    if (
      (eventName === 'selectedAccountSynced' && !multisig) ||
      (eventName === 'sharedAccountSynced' && multisig && _address === address)
    ) {
      refetch();
    }
  });

  // send initial balance request...
  useEffect(() => {
    if (session && !loading) {
      refetch();
    }
  }, [session?.topic]);

  const error: string | undefined = wc_error
    ? (wc_error as Error).message
    : wc_data && wc_data.error;
  const response: GetBalancesResponse | undefined = wc_data;
  const balances: Balance[] | undefined = response?.balances;

  return { balances, error, loading };
};
