import useClientWalletStore from './clientWalletStore.js';
import { useRequest } from '@walletconnect/modal-sign-react';
import { useEffect, useState } from 'react';
import { usePuzzleWallet } from './useWallet.js';

export type BalanceRequestData = {
  assetId?: String; // No id = aleo credits
};

export type BalanceResponseData = { 
  balance: number;
};

export const useBalance = () => {
  const { session } = usePuzzleWallet(); 

  const { request, data, error, loading } = useRequest({
    topic: session?.topic,
    chainId: 'aleo:1',
    request: {
      id: 1,
      jsonrpc: '2.0',
      method: 'aleo_getBalance',
      params: {
        assetId: undefined
      } as BalanceRequestData
    },
  })

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
  
  let balance = data ? data.balance : 0;
  return { request, data, error, loading, balance }; 
};