export declare const wc_aleo_methods: string[];
export declare const wc_aleo_chains: string[];
export declare const wc_events: string[];
export declare const projectId = "f0aaeffe71b636da453fce042d79d723";
export declare const walletURL = "https://walletconnect.puzzle.online/";
export declare const web3modal_puzzle_props: {
    standaloneChains: string[];
    enableExplorer: boolean;
    enableAccountView: boolean;
    enableNetworkView: boolean;
    enableStandaloneMode: boolean;
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
