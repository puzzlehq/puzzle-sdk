export declare const shortenAddress: (address: string) => string;
export declare const useAccount: () => {
    account: import("../index.js").PuzzleAccount | undefined;
    error: string | undefined;
    loading: boolean;
};
