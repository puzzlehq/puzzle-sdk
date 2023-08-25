import { Balances } from '../messaging/balance.js';
export declare const useBalance: () => {
    loading: any;
    balances: Balances | undefined;
    error: string | undefined;
};
