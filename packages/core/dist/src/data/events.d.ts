import { Balance, Network } from '@puzzlehq/types';
export type AccountSelectedResponse = {
    address: string;
    balances: Balance[];
    network: Network;
};
export type AccountSyncedResponse = AccountSelectedResponse;
