import { create } from 'zustand';
import { queryClient } from './index.js';
import { persist } from 'zustand/middleware';
import { networkToChainId } from '@puzzlehq/sdk-core';
export const useWalletStore = create()(persist((set, get) => ({
    account: undefined,
    chainIdStr: undefined,
    network: undefined,
    setAddress: (address) => {
        set({ address });
    },
    setNetwork: (network) => {
        const chainIdStr = network ? networkToChainId(network) : undefined;
        set({
            network,
            chainIdStr
        });
    },
    onDisconnect: () => {
        set({
            address: undefined,
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
