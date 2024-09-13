import { Network } from '@puzzlehq/types';
export declare const wc_aleo_methods: string[];
export declare const wc_aleo_chains: string[];
export declare const wc_events: string[];
export declare const projectId = "f0aaeffe71b636da453fce042d79d723";
export declare const web3modal_puzzle_props_android: {
    projectId: string;
    chains: string[];
    enableExplorer: boolean;
    explorerRecommendedWalletIds: string[];
    mobileWallets: {
        id: string;
        name: string;
        links: {
            native: string;
            universal: string;
        };
    }[];
    walletImages: {
        puzzle: string;
        avail: string;
    };
};
export declare const web3modal_puzzle_props_default: {
    projectId: string;
    chains: string[];
    enableExplorer: boolean;
    explorerRecommendedWalletIds: string[];
    mobileWallets: {
        id: string;
        name: string;
        links: {
            native: string;
            universal: string;
        };
    }[];
    desktopWallets: {
        id: string;
        name: string;
        links: {
            native: string;
            universal: string;
        };
    }[];
    walletImages: {
        puzzle: string;
        avail: string;
    };
};
export declare const web3modal_puzzle_props: {
    projectId: string;
    chains: string[];
    enableExplorer: boolean;
    explorerRecommendedWalletIds: string[];
    mobileWallets: {
        id: string;
        name: string;
        links: {
            native: string;
            universal: string;
        };
    }[];
    walletImages: {
        puzzle: string;
        avail: string;
    };
};
export declare const networkToChainId: (network: Network, includePrefix?: boolean) => string;
export declare const chainIdToNetwork: (chainId: 'aleo:0' | 'aleo:1' | string) => Network | undefined;
