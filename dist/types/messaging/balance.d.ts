export type GetBalancesRequest = {
    assetId?: string;
    address?: string;
};
export type Balance = {
    private: number;
    public: number;
};
export type GetBalancesResponse = {
    balances?: Balance[];
    error?: string;
};
