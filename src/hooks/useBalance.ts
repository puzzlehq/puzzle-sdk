import useClientWalletStore from './clientWalletStore.js';
import { useRequest } from '@walletconnect/modal-sign-react';
import { useEffect, useState } from 'react';
import { usePuzzleWallet } from './useWallet.js';
import { GetBalanceMessage, GetBalanceRejMessage, GetBalanceResMessage } from '../messaging/balance.js';

export const useBalance = () => {
  const { session } = usePuzzleWallet(); 
  const { signClient } = useClientWalletStore();
  const [balance, setBalance] = useState(0);

  let data: GetBalanceResMessage | GetBalanceRejMessage | undefined;
  const { request, data: _data, error, loading } = useRequest({
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
  })

  data = _data

  useEffect(() => {
    if (!(signClient && session)) return;

    signClient.events.on('session_event', ({ id, params, topic }) => {
      const eventName = params.event.name;
      if (topic !== topic || eventName !== 'balanceChanged') return;
      
      const newBalance: number = params.event.data;
      setBalance(newBalance);
    })
  }, [signClient, session])

  useEffect(() => { 
    (async () => {
      if (session) {
        console.log("balance request sending");
        request();
      } else {
        console.log("no session");
      }
    })()
  }, [session]);
  
  useEffect(() => {
    if (data && data.type === 'GET_BALANCE_RES') {
      setBalance(data.data.balance)
    } 
  }, [data])

  return { request, data, error, loading, balance }; 
};