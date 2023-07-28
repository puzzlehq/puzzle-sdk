import { useConnect as useWalletConnect } from '@walletconnect/modal-sign-react';
import {
  wc_aleo_chains,
  wc_aleo_methods,
  wc_events,
} from '../data/walletconnect.js';
import { useEffect, useState } from 'react';

export const useConnect = () => {
  const [error, setError] = useState<string | undefined>(undefined);
  const {connect: wc_connect, data, error: wc_error, loading} = useWalletConnect({
    requiredNamespaces: {
      aleo: {
        methods: wc_aleo_methods,
        chains: wc_aleo_chains,
        events: wc_events,
      },
    },
  });
  const connect = async () => {
    try {
      await wc_connect();
      setError(undefined);
    } catch (e) {}
  }

  useEffect(() => {
    if (wc_error) {
      setError(wc_error.message);
    }
  }, [wc_error])
  
  return { connect, data, error, loading };
};
