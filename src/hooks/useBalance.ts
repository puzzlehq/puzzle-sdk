import useClientWalletStore from './clientWalletStore.js';
import { useRequest, useSession } from '@web3modal/sign-react';
import { useEffect, useState } from 'react';
import { usePuzzleAccount } from './useAccount.js';
import { usePuzzleWallet } from './useWallet.js';

export type BalanceRequestData = {
  assetId?: String; // No id = aleo credits
};

export type BalanceResponseData = { 
  balance: number;
};

export const useBalance = () => {
  const { session } = usePuzzleWallet(); 
  const [signClient] = useClientWalletStore((state) => [state.signClient])

  const { request, data, balanceError, loading } = useRequest({
    topic:   session?.topic,
    chainId: 'aleo:1',
    request: {
      id: 1,
      jsonrpc: '2.0',
      method: 'aleo_getBalance',
      params: undefined
    },
  })

  const [balance, setBalance] = useState<number | null>(null); 
  const [error, setError] = useState<Error | null>(null); 
   
  useEffect( () => { 
    if(session) { 
      console.log("balance request sending");
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