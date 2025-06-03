import { GetBalancesRequest } from '@puzzlehq/sdk-core';
import { Balance } from '@puzzlehq/types';
export declare const useBalance: ({ address, network, multisig, }?: GetBalancesRequest) => {
    balances: Balance[] | undefined;
    error: string;
    loading: boolean;
};
