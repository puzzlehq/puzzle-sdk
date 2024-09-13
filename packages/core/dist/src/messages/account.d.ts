import { PuzzleAccount } from '../data/types.js';
import { Network } from '@puzzlehq/types';
export type GetSelectedAccountResponse = {
    account?: PuzzleAccount;
    error?: string;
};
export declare const getAccount: (network?: Network) => Promise<GetSelectedAccountResponse>;
