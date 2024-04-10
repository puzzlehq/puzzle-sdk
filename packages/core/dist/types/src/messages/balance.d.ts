import { Balance } from '@puzzlehq/types';
export type GetBalancesRequest = {
    assetId?: string;
    address?: string;
};
export type GetBalancesResponse = {
    balances?: Balance[];
    error?: string;
};
export declare const getBalance: ({ address, network, }: {
    address?: string | undefined;
    network?: string | undefined;
}) => Promise<GetBalancesResponse>;
