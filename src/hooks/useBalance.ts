import useClientWalletStore from './clientWalletStore.js';
import { useRequest } from '@walletconnect/modal-sign-react';
import { useEffect, useState } from 'react';
import { usePuzzleWallet } from './useWallet.js';
import { GetBalanceMessage, GetBalanceResMessage } from '../messaging/balance.js';

export const useBalance = () => {
  const { session } = usePuzzleWallet(); 
  const { signClient } = useClientWalletStore();
  const [balance, setBalance] = useState(0);
  const [loading, setLoading] = useState(false);

  const { request, data, error, _ } = useRequest({
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
        if (eventName === 'accountChanged') {
          setLoading(true)
        } else if (eventName === 'balanceChanged') {
          const newBalance: number = Number(params.event.data);
          setBalance(newBalance);
          setLoading(false)
        }
      });
    }
  }, [signClient, session])

  // send balance request...
  useEffect(() => { 
    if (session) {
      setLoading(true);
      request();
    }
  }, [session]);

  // ...and listen for response
  useEffect(() => { 
    if (error) {
      /// todo -- pipe this to the frontend
    } else if (data) {
      const response = data as GetBalanceResMessage;
      setLoading(false);
      setBalance(response.data.balance);
    }
  }, [data, error]);

  return { loading, balance };
};