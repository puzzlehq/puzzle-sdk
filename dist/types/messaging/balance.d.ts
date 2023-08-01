export type GetBalanceMessage = {
    type: 'GET_BALANCE';
    data?: {
        assetId?: string;
        address?: string;
    };
    sender?: string;
};
export type GetBalanceResMessage = {
    type: 'GET_BALANCE_RES';
    data: {
        balance: number;
    };
};
export type GetBalanceRejMessage = {
    type: 'GET_BALANCE_REJ';
    data: {
        error?: string;
    };
};
