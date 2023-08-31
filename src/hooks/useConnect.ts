import { useSession, useConnect as useWalletConnect } from '@walletconnect/modal-sign-react';
import {
  wc_aleo_chains,
  wc_aleo_methods,
  wc_events,
} from '../data/walletconnect.js';

export const useConnect = () => {
  const session = useSession();
  const {connect: wc_connect, data, error, loading} = useWalletConnect({
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
    } catch (e) { }
  }

  return { connect, data, error, loading, session, isConnected: !!session };
};
