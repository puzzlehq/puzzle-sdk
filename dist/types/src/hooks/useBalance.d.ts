import { Balance } from '../messages/balance.js';
export declare const useBalance: () => {
    balances: Balance[];
    error: string;
    loading: boolean;
};
