import useClientWalletStore from './clientWalletStore.js';
import { useOnSessionEvent, useRequest, useSession } from '@walletconnect/modal-sign-react';
import { useEffect } from 'react';
import { Balance, GetBalancesRequest, GetBalancesResponse } from '../messaging/balance.js';
import { SessionTypes } from '@walletconnect/types';

export const useBalance = () => {
  const session: SessionTypes.Struct | undefined = useSession();
  const [chainId, account] = useClientWalletStore((state) => [
    state.chainId, state.account
  ]);

  const { request, data: wc_data, error: wc_error, loading } = useRequest({
    topic: session?.topic,
    chainId: chainId,
    request: {
      id: 1,
      jsonrpc: '2.0',
      method: 'getBalance',
      params: {
        assetId: undefined
      } as GetBalancesRequest
    },
  });

  // listen for wallet-originated balance updates
  useOnSessionEvent(({ _, params, topic }) => {
    const eventName = params.event.name;
    if (eventName === 'accountSynced' && session && session.topic === topic && !loading) {
      request();
    }
  });

  // send initial balance request...
  const readyToRequest = !!session && !!account;
  useEffect(() => { 
    if (readyToRequest && !loading) {
      request();
    }
  }, [readyToRequest, account]);

  const error: string | undefined = wc_error ? wc_error.message : (wc_data && wc_data.error);
  const response: GetBalancesResponse | undefined =  wc_data;
  const balances: Balance[] | undefined = response?.balances;

  return { loading, balances, error };
};