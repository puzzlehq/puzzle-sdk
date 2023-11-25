import { Balance } from '../messages/balance.js';
export declare const useBalance: () => {
    balances: Balance[] | undefined;
    error: string | undefined;
    loading: boolean;
};
