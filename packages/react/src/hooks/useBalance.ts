import { useEffect } from 'react';
import {
  Balance,
  GetBalancesRequest,
  GetBalancesResponse,
} from '@puzzlehq/sdk-core';
import { useSession } from './wc/useSession.js';
import { SessionTypes } from '@walletconnect/types';
import { useOnSessionEvent } from './wc/useOnSessionEvent.js';
import { useRequestQuery } from './wc/useRequest.js';
import { useWalletStore } from '../store.js';

type UseBalanceParams = {
  address?: string;
  multisig?: boolean;
}

export const useBalance = ({address, multisig}: UseBalanceParams) => {
  const session: SessionTypes.Struct | undefined = useSession();
  const [account] = useWalletStore((state) => [state.account]);


  const { refetch, data: wc_data, error: wc_error, isLoading: loading } = useRequestQuery<GetBalancesResponse | undefined>({
    queryKey: ['useBalance', address, account?.address ?? '', multisig, session?.topic],
    enabled: !!session && !!account && (multisig ? !!address : true),
    wcParams: {
      topic: session?.topic,
      chainId: 'aleo:3',
      request: {
        jsonrpc: '2.0',
        method: 'getBalance',
        params: {
          assetId: undefined,
          address
        } as GetBalancesRequest
      },
    }
  });

  useOnSessionEvent(({ params, topic }) => {
    const eventName = params.event.name;
    const _address = params.event.address ?? params.event.data.address;
    if ((eventName === 'selectedAccountSynced' && !multisig) || (eventName === 'sharedAccountSynced' && multisig && _address === address)) {
      refetch();
    }
  });

  // send initial balance request...
  useEffect(() => {
    if (session && !loading) {
      refetch();
    }
  }, [session?.topic]);

  const error: string | undefined = wc_error ? (wc_error as Error).message : (wc_data && wc_data.error);
  const response: GetBalancesResponse | undefined =  wc_data;
  const balances: Balance[] | undefined = response?.balances;

  return { balances, error, loading };
};
