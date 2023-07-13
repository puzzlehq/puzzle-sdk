import { useConnect } from '@walletconnect/modal-sign-react';
import {
  wc_aleo_chains,
  wc_aleo_methods,
  wc_events,
} from '../data/walletconnect.js';

export const usePuzzleConnect = () => {
  return useConnect({
    requiredNamespaces: {
      aleo: {
        methods: wc_aleo_methods,
        chains: wc_aleo_chains,
        events: wc_events,
      },
    },
  });
};
