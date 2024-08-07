import { create } from 'zustand';
import { queryClient } from './index.js';
import { persist } from 'zustand/middleware';
export const useWalletStore = create()(persist((set, get) => ({
    account: undefined,
    chainId: 'aleo:1',
    setAccount: (account) => {
        set({ account });
    },
    setChainId: (chainId) => {
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
}), {
    name: 'puzzle-wallet-store',
}));
