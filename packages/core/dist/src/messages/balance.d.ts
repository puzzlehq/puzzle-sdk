import { Balance, Network } from '@puzzlehq/types';
export type GetBalancesRequest = {
    address?: string;
    network?: Network;
    multisig?: boolean;
};
export type GetBalancesResponse = {
    balances: Balance[];
};
export declare const getBalance: ({ address, network, multisig, }: GetBalancesRequest) => Promise<GetBalancesResponse>;
