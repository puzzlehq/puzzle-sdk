export declare const wc_aztec_methods: string[];
export declare const wc_aztec_chains: string[];
export declare const wc_aleo_methods: string[];
export declare const wc_aleo_chains: string[];
export declare const wc_events: string[];
export declare const projectId = "2133b10d21f9fcf851eb9ef8f057acea";
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
        aztec: {
            methods: string[];
            chains: string[];
            events: string[];
        };
        aleo: {
            methods: string[];
            chains: string[];
            events: string[];
        };
    };
};
