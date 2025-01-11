import { create } from 'zustand';
import { queryClient } from './provider/queryProvider.js';
import { persist } from 'zustand/middleware';
export const useWalletStore = create()(persist((set) => ({
    account: undefined,
    setAccount: (account) => {
        set({ account });
    },
    onDisconnect: () => {
        set({
            account: undefined,
        });
        queryClient.clear();
    },
}), {
    name: 'puzzle-wallet-store',
    version: 2
}));
