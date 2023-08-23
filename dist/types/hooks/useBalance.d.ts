import { Balances } from '../messaging/balance.js';
export declare const useBalance: () => {
    loading: boolean;
    balances: Balances | undefined;
    error: string | undefined;
};
