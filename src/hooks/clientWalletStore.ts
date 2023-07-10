import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { ISignClient, SessionTypes } from '@walletconnect/types';
import { PuzzleAccount } from '../data/types.js';

type ClientWalletState = {
  account?: PuzzleAccount;
  accounts: PuzzleAccount[];
  chainId?: string;
  session?: SessionTypes.Struct;
  signClient?: ISignClient;

  setAccounts: (accounts: PuzzleAccount[]) => void;
  setAccount: (account: PuzzleAccount) => void;
  setChainId: (chainId: string) => void;
  setSession: (session: SessionTypes.Struct) => void;
  setSignClient: (signClient: ISignClient) => void;
};

const useClientWalletStore = create<ClientWalletState>()(
  immer((set, get) => ({
    account: undefined,
    accounts: [],
    chainId: undefined,
    session: undefined,
    signClient: undefined,
    setAccounts: (accounts: PuzzleAccount[]) => {
      set({ accounts });
    },
    setAccount: (account: PuzzleAccount) => {
      set({ account });
    },
    setChainId: (chainId: string) => {
      set({ chainId });
    },
    setSession: (session: SessionTypes.Struct) => {
      set({ session });
    },
    setSignClient: (signClient: ISignClient) => {
      set({ signClient });
    },
  }))
);

export default useClientWalletStore;
