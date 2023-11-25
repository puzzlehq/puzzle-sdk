import { PuzzleAccount } from '../index.js';
export declare const shortenAddress: (address: string) => string;
export declare const useAccount: () => {
    account: PuzzleAccount | undefined;
    error: string | undefined;
    loading: boolean;
};
