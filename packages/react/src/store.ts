import { create } from 'zustand';
import { queryClient } from './provider/queryProvider.js';
import { persist } from 'zustand/middleware';
import { PuzzleAccount } from '@puzzlehq/sdk-core';

type WalletState = {
  account?: PuzzleAccount;
  setAccount: (account: PuzzleAccount | undefined) => void;
  onDisconnect: () => void;
};

export const useWalletStore = create<WalletState>()(
  persist(
    (set) => ({
      account: undefined,
      setAccount: (account: PuzzleAccount | undefined) => {
        set({ account });
      },
      onDisconnect: () => {
        console.log('useWalletStore onDisconnect called');
        queryClient.clear();
        set({
          account: undefined,
        });
      },
    }),
    {
      name: 'puzzle-wallet-store',
      version: 2,
    },
  ),
);