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
declare const useClientWalletStore: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<ClientWalletState>, "setState"> & {
    setState(nextStateOrUpdater: ClientWalletState | Partial<ClientWalletState> | ((state: import("immer/dist/internal.js").WritableDraft<ClientWalletState>) => void), shouldReplace?: boolean | undefined): void;
}>;
export default useClientWalletStore;
