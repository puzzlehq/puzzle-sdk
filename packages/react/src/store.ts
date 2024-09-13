import { create } from 'zustand';
import { queryClient } from './index.js';
import { persist } from 'zustand/middleware';
import { chainIdToNetwork, PuzzleAccount } from '@puzzlehq/sdk-core';
import { Network } from '@puzzlehq/types';

type WalletState = {
  account?: PuzzleAccount;
  network?: Network;
  chainIdStr?: string

  setAccount: (account: PuzzleAccount | undefined) => void;
  onDisconnect: () => void;
};

export const useWalletStore = create<WalletState>()(
  persist(
    (set, get) => ({
      account: undefined,
      chainIdStr: undefined, // 'aleo:0' | 'aleo:1'
      network: undefined,
      setAccount: (account: PuzzleAccount | undefined) => {
        const chainIdStr = account ? `${account.network}:${account.chainId}` : undefined
        console.log('chainIdStr',chainIdStr);
        const network: Network | undefined = chainIdStr ? chainIdToNetwork(chainIdStr) : undefined
        if (network) {
          set({ 
            account,
            network,
            chainIdStr
           });
        }
      },
      onDisconnect: () => {
        set({
          account: undefined,
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
