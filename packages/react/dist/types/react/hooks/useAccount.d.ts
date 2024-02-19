export declare const shortenAddress: (address?: string, aleo?: boolean, length?: number, short?: boolean) => string;
export declare const useAccount: () => {
    account: import("../index.js").PuzzleAccount | undefined;
    error: string | undefined;
    loading: boolean;
};
