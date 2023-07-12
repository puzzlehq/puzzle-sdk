import useClientWalletStore from './clientWalletStore.js';
import { useRequest, useSession } from '@walletconnect/modal-sign-react';
import { useEffect, useState } from 'react';
import { usePuzzleAccount } from './useAccount.js';
import { usePuzzleWallet } from './useWallet.js';

export type BalanceRequestData = {
  assetId?: String; // No id = aleo credits
};

export type BalanceResponseData = { 
  balance: number;
};

export const useBalance: {data?: BalanceResponseData, error?: Error} = () => {
  const { session } = usePuzzleWallet(); 

  const { request, data: BalanceResponseData, balanceError, loading } = useRequest({
    topic:   session?.topic,
    chainId: 'aleo:1',
    request: {
      id: 1,
      jsonrpc: '2.0',
      method: 'aleo_getBalance',
    },
  })

  const [balance, setBalance] = useState<number | null>(null); 
  const [error, setError] = useState<Error | null>(null); 
   
  useEffect( () => { 
    if(session) { 
      //console.log("balance request sending");
      request();
      if (balanceError) { 
        setError(balanceError); 
      }
  
      // if(data) { 
      //   setBalance(data.balance); 
      // }
    } else { 
      console.log("no session");
    }
  }, [session]);
  
  return { balance, error }; 
};