import { Balance } from '../messages/balance.js';
export declare const useBalance: ({ address }: {
    address?: string | undefined;
}) => {
    balances: Balance[] | undefined;
    error: string | undefined;
    loading: boolean;
};
