import { Balance } from "../messages/balance.js";
export type AccountSelectedResponse = {
    address: string;
    balances: Balance[];
};
export type AccountSyncedResponse = AccountSelectedResponse;
