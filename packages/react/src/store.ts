import { create } from 'zustand';
import { queryClient } from './index.js';
import { persist } from 'zustand/middleware';
import { PuzzleAccount } from '@puzzlehq/sdk-core';

type WalletState = {
  account?: PuzzleAccount;
  chainId?: string;

  setAccount: (account: PuzzleAccount | undefined) => void;
  setChainId: (chainId: string) => void;
  onDisconnect: () => void;
};

export const useWalletStore = create<WalletState>()(
  persist(
    (set, get) => ({
      account: undefined,
      chainId: 'aleo:1', // todo - figure out how to populate this from useConnect
      setAccount: (account: PuzzleAccount | undefined) => {
        set({ account });
      },
      setChainId: (chainId: string) => {
        set({ chainId });
      },
      onDisconnect: () => {
        set({
          account: undefined,
          chainId: undefined,
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
