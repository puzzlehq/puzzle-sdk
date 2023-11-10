import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { PuzzleAccount } from '../data/types.js';

type ClientWalletState = {
  account?: PuzzleAccount;
  accounts: PuzzleAccount[];
  chainId?: string;

  setAccounts: (accounts: PuzzleAccount[]) => void;
  setAccount: (account: PuzzleAccount) => void;
  setChainId: (chainId: string) => void;
  disconnect: () => void;
};

const useClientWalletStore = create<ClientWalletState>()(
  immer((set, get) => ({
    accounts: [],
    chainId: 'aleo:1', // todo - figure out how to populate this from useConnect
    setAccounts: (accounts: PuzzleAccount[]) => {
      set({ accounts });
    },
    setAccount: (account: PuzzleAccount) => {
      set({ account });
    },
    setChainId: (chainId: string) => {
      set({ chainId });
    },
    disconnect: () => {
      set({
        account: undefined,
        accounts: [],
        chainId: undefined,
      })
    }
  }))
);

export default useClientWalletStore;
