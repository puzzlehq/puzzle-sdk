import { PuzzleAccount } from '../index.js';
export declare const shortenAddress: (address: string) => string;
export declare const useAccount: () => {
    account: PuzzleAccount;
    error: string;
    loading: boolean;
};
