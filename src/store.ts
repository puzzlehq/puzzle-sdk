import { create } from 'zustand';
import { PuzzleAccount } from './index.js';
import { persist } from 'zustand/middleware';

type WalletState = {
  account: PuzzleAccount | undefined;
  chainId?: string;

  setAccount: (account: PuzzleAccount | undefined) => void;
  setChainId: (chainId: string) => void;
  disconnect: () => void;
};

const useWalletStore = create<WalletState>()(
  persist((set, get) => ({
    account:undefined,
    chainId: 'aleo:1', // todo - figure out how to populate this from useConnect
    setAccount: (account: PuzzleAccount | undefined) => {
      set({ account });
    },
    setChainId: (chainId: string) => {
      set({ chainId });
    },
    disconnect: () => {
      set({
        account: undefined,
        chainId: undefined,
      })
    }
  }), {
    name: 'puzzle-wallet-store'
  })
);

export default useWalletStore;