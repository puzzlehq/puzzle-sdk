export type GetDeployFeeMessage = {
    type: "GET_DEPLOY_FEE";
    data?: {
        assetId?: string;
        address?: string;
    };
    sender?: string;
};

export type GetDeployFeeResMessage = {
    type: "GET_DEPLOY_FEE_RES";
    data: {
        balance: number;
    };
};

export type GetDeployFeeRejMessage = {
    type: "GET_DEPLOY_FEE_REJ";
    data: {
        error?: string;
    };
};
