export type GetBalanceMessage = {
    type: 'GET_BALANCE';
    data?: {
        assetId?: string;
        address?: string;
    };
    sender?: string;
};
export type Balances = {
    privateBalance: number;
    publicBalance: number;
};
export type GetBalanceResMessage = {
    type: 'GET_BALANCE_RES';
    data: {
        balances?: Balances;
    };
};
export type GetBalanceRejMessage = {
    type: 'GET_BALANCE_REJ';
    data: {
        error?: string;
    };
};
