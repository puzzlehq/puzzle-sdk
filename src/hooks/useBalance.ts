import useClientWalletStore from './clientWalletStore.js';
import { useRequest } from '@walletconnect/modal-sign-react';
import { useEffect, useState } from 'react';
import { useWallet } from './useWallet.js';
import { GetBalanceMessage, GetBalanceRejMessage, GetBalanceResMessage } from '../messaging/balance.js';

export const useBalance = () => {
  const { session } = useWallet(); 
  const { signClient } = useClientWalletStore();
  const [balance, setBalance] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const { request, data: wc_data, error: wc_error, _ } = useRequest({
    topic: session?.topic,
    chainId: 'aleo:1',
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
  useEffect(() => {
    if (signClient && session) {
      signClient.events.on('session_event', ({ id, params, topic }) => {
        if (topic !== session.topic) return;
        const eventName = params.event.name;
        if (eventName === 'accountsChanged') {
          setLoading(true)
        } else if (eventName === 'balanceChanged') {
          const newBalance: number = Number(params.event.data);
          setBalance(newBalance);
          setLoading(false)
        }
      });
    }
  }, [signClient, session])

  // send initial balance request...
  useEffect(() => { 
    if (session) {
      setLoading(true);
      request();
    }
  }, [session]);

  // ...and listen for response
  useEffect(() => { 
    if (wc_error) {
      setBalance(0);
      setError(wc_error.message);
    } else if (wc_data) {
      const error: string | undefined = wc_data && wc_data.type === 'GET_BALANCE_REJ' ? wc_data.data.error : undefined;
      const puzzleData: GetBalanceResMessage | undefined = wc_data && wc_data.type === 'GET_BALANCE_RES' ? wc_data : undefined;
      const balance = puzzleData?.data.balance ?? 0;
      setLoading(false);
      setError(error);
      setBalance(balance);
    }
  }, [wc_data, wc_error]);

  return { loading, balance, error };
};