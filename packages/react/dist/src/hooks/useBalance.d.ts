import { Network } from '@puzzlehq/sdk-core';
import { Balance } from '@puzzlehq/types';
type UseBalanceParams = {
    address?: string;
    multisig?: boolean;
    network?: Network;
};
export declare const useBalance: ({ address, multisig, network }?: UseBalanceParams) => {
    balances: Balance[] | undefined;
    error: string | undefined;
    loading: boolean;
};
export {};
