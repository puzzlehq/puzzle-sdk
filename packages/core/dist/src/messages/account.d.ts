import { PuzzleAccount } from '../data/types.js';
export type GetSelectedAccountResponse = {
    account: PuzzleAccount;
};
export declare const getAccount: () => Promise<GetSelectedAccountResponse>;
