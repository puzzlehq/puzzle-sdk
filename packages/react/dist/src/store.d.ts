import { Network } from '@puzzlehq/types';
type WalletState = {
    address?: string;
    network?: Network;
    chainIdStr?: string;
    setAddress: (address: string | undefined) => void;
    setNetwork: (network: Network | undefined) => void;
    onDisconnect: () => void;
};
export declare const useWalletStore: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<WalletState>, "persist"> & {
    persist: {
        setOptions: (options: Partial<import("zustand/middleware").PersistOptions<WalletState, WalletState>>) => void;
        clearStorage: () => void;
        rehydrate: () => void | Promise<void>;
        hasHydrated: () => boolean;
        onHydrate: (fn: (state: WalletState) => void) => () => void;
        onFinishHydration: (fn: (state: WalletState) => void) => () => void;
        getOptions: () => Partial<import("zustand/middleware").PersistOptions<WalletState, WalletState>>;
    };
}>;
export {};
