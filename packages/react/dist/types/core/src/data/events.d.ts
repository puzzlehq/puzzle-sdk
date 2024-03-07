import { Balance } from '../messages/balance.js';
export type AccountSelectedResponse = {
    address: string;
    balances: Balance[];
    chain?: string;
};
export type AccountSyncedResponse = AccountSelectedResponse;
