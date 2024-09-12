import { create } from 'zustand';
import { queryClient } from './index.js';
import { persist } from 'zustand/middleware';
import { chainIdToNetwork } from '@puzzlehq/sdk-core';
export const useWalletStore = create()(persist((set, get) => ({
    account: undefined,
    chainIdStr: undefined,
    network: undefined,
    setAccount: (account) => {
        const chainIdStr = account ? `${account.network}:${account.chainId}` : undefined;
        // @ts-ignore
        const network = chainIdStr ? chainIdToNetwork(chainIdStr) : undefined;
        if (network) {
            set({
                account,
                network,
                chainIdStr
            });
        }
    },
    onDisconnect: () => {
        set({
            account: undefined,
            chainIdStr: undefined,
            network: undefined,
        });
        queryClient.clear();
        localStorage.removeItem('puzzle-hasInjectedConnection');
        console.log('onDisconnect called!');
    },
}), {
    name: 'puzzle-wallet-store',
}));
