export declare const wc_aleo_methods: string[];
export declare const wc_aleo_chains: string[];
export declare const wc_events: string[];
export declare const projectId = "f0aaeffe71b636da453fce042d79d723";
export declare const web3modal_puzzle_props_android: {
    chains: string[];
    enableExplorer: boolean;
    explorerRecommendedWalletIds: string[];
};
export declare const web3modal_puzzle_props_default: {
    chains: string[];
    enableExplorer: boolean;
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
    chains: string[];
    enableExplorer: boolean;
    explorerRecommendedWalletIds: string[];
} | {
    chains: string[];
    enableExplorer: boolean;
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
export declare const signClient_puzzleProps: {
    requiredNamespaces: {
        aleo: {
            methods: string[];
            chains: string[];
            events: string[];
        };
    };
};
