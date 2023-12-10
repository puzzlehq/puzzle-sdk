import { Balance } from '../messages/balance.js';
type UseBalanceParams = {
    address?: string;
    multisig?: boolean;
};
export declare const useBalance: ({ address, multisig }: UseBalanceParams) => {
    balances: Balance[] | undefined;
    error: string | undefined;
    loading: boolean;
};
export {};
