import { PuzzleAccount } from '../data/types.js';
export type GetSelectedAccountResponse = {
    account?: PuzzleAccount;
    error?: string;
};
export declare const getAccount: (network?: string) => Promise<GetSelectedAccountResponse>;
