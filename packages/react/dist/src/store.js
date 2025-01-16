import { create } from 'zustand';
import { queryClient } from './provider/queryProvider.js';
import { persist } from 'zustand/middleware';
export const useWalletStore = create()(persist((set) => ({
    account: undefined,
    setAccount: (account) => {
        set({ account });
    },
    onDisconnect: () => {
        console.log('useWalletStore onDisconnect called');
        queryClient.clear();
        set({
            account: undefined,
        });
    },
}), {
    name: 'puzzle-wallet-store',
    version: 2,
}));
