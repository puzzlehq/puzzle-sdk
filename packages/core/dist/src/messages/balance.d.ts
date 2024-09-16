import { Balance, Network } from '@puzzlehq/types';
export type GetBalancesRequest = {
    address?: string;
    network?: Network;
};
export type GetBalancesResponse = {
    balances?: Balance[];
    error?: string;
};
export declare const getBalance: ({ address, network, }: GetBalancesRequest) => Promise<GetBalancesResponse>;
