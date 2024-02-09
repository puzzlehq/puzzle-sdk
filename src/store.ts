import { create } from 'zustand';
import { PuzzleAccount, queryClient } from './index.js';
import { persist } from 'zustand/middleware';

type WalletState = {
  account?: PuzzleAccount;
  chainId?: string;

  setAccount: (account: PuzzleAccount | undefined) => void;
  setChainId: (chainId: string) => void;
  onDisconnect: () => void;
};

const useWalletStore = create<WalletState>()(
  persist((set, get) => ({
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
      })
      queryClient.clear()
      console.log('onDisconnect called!')
    }
  }), {
    name: 'puzzle-wallet-store'
  })
);

export default useWalletStore;