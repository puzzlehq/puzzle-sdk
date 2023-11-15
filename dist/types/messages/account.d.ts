import { PuzzleAccount } from '../index.js';
export type GetSelectedAccountResponse = {
    account?: PuzzleAccount;
    error?: string;
};
export declare const getAccount: () => Promise<GetSelectedAccountResponse>;
