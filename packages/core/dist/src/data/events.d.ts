import { Balance } from '@puzzlehq/types';
export type AccountSelectedResponse = {
    address: string;
    balances: Balance[];
    chain?: string;
};
export type AccountSyncedResponse = AccountSelectedResponse;
