import useClientWalletStore from './clientWalletStore.js';
import { useOnSessionEvent, useRequest, useSession } from '@walletconnect/modal-sign-react';
import { useEffect, useState } from 'react';
import { GetBalanceMessage, GetBalanceResMessage } from '../messaging/balance.js';
import { SessionTypes } from '@walletconnect/types';

export const useBalance = () => {
  const session: SessionTypes.Struct = useSession();
  const [chainId, account] = useClientWalletStore((state) => [
    state.chainId, state.account
  ]);

  const [balance, setBalance] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const { request, data: wc_data, error: wc_error, loading: wc_loading } = useRequest({
    topic: session?.topic,
    chainId: chainId ?? 'aleo:1',
    request: {
      id: 1,
      jsonrpc: '2.0',
      method: 'aleo_getBalance',
      params: {
        type: 'GET_BALANCE',
        data: {
          assetId: undefined
        }
      } as GetBalanceMessage
    },
  });

  // listen for wallet-originated balance updates
  useOnSessionEvent(({ id, params, topic }) => {
    const eventName = params.event.name;
    if (eventName === 'accountSynced' && session && session.topic === topic) {
      request();
      setLoading(true);
    }
  });

  // send initial balance request...
  useEffect(() => { 
    if (session) {
      request();
      setLoading(true);
      console.log('sending balance request in useBalance!')
    }
  }, [session, account]);

  // ...and listen for response
  useEffect(() => { 
    if (wc_error) {
      setBalance(0);
      setError(wc_error.message);
      setLoading(false);
    } else if (wc_data) {
      const puzzleData: GetBalanceResMessage | undefined = wc_data && wc_data.type === 'GET_BALANCE_RES' ? wc_data : undefined;
      const error: string | undefined = wc_data && wc_data.type === 'GET_BALANCE_REJ' ? wc_data.data.error : undefined;
      const balance = puzzleData?.data.balance ?? 0;
      setBalance(balance);
      setError(error);
      setLoading(false)
    }
  }, [wc_data, wc_error]);

  return { loading, balance, error };
};