import { create } from 'zustand';
import { queryClient } from './index.js';
import { persist } from 'zustand/middleware';
import { networkToChainId } from '@puzzlehq/sdk-core';
import { Network } from '@puzzlehq/types';

type WalletState = {
  address?: string;
  network?: Network;
  chainIdStr?: string

  setAddress: (address: string | undefined) => void;
  setNetwork: (network: Network | undefined) => void;
  onDisconnect: () => void;
};

export const useWalletStore = create<WalletState>()(
  persist(
    (set, get) => ({
      account: undefined,
      chainIdStr: undefined, // 'aleo:0' | 'aleo:1'
      network: undefined,
      setAddress: (address) => {
        set({ address });
      },
      setNetwork: (network) => {
        const chainIdStr = network ? networkToChainId(network) : undefined;
        set({
          network,
          chainIdStr
        });
      },
      onDisconnect: () => {
        set({
          address: undefined,
          chainIdStr: undefined,
          network: undefined,
        });
        queryClient.clear();
        localStorage.removeItem('puzzle-hasInjectedConnection');
        console.log('onDisconnect called!');
      },
    }),
    {
      name: 'puzzle-wallet-store',
    },
  ),
);
