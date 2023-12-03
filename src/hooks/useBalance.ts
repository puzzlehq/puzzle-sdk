import { useEffect } from 'react';
import {
  Balance,
  GetBalancesRequest,
  GetBalancesResponse,
} from '../messages/balance.js';
import { useSession } from './wc/useSession.js';
import { SessionTypes } from '@walletconnect/types';
import { useOnSessionEvent } from './wc/useOnSessionEvent.js';
import { useRequest } from './wc/useRequest.js';
import useWalletStore from '../store.js';

export const useBalance = ({address}: {address?: string}) => {
  const session: SessionTypes.Struct | undefined = useSession();
  const [account] = useWalletStore((state) => [state.account]);

  const chainId = 'aleo:1';

  const { request, data: wc_data, error: wc_error, loading } = useRequest<GetBalancesResponse | undefined>({
    topic: session?.topic,
    chainId: chainId,
    request: {
      jsonrpc: '2.0',
      method: 'getBalance',
      params: {
        assetId: undefined,
        address
      } as GetBalancesRequest
    },
  });

  useOnSessionEvent(({ params, topic }) => {
    const eventName = params.event.name;
    const address = params.event.address;
    if (
      (eventName === 'selectedAccountSynced' || eventName === 'accountSelected') &&
      session &&
      session.topic === topic &&
      address === account?.address &&
      !loading
    ) {
      request();
    }
  });

  // send initial balance request...
  useEffect(() => {
    if (session && !loading) {
      request();
    }
  }, [session?.topic]);

  const error: string | undefined = wc_error ? (wc_error as Error).message : (wc_data && wc_data.error);
  const response: GetBalancesResponse | undefined =  wc_data;
  const balances: Balance[] | undefined = response?.balances;

  return { balances, error, loading };
};
