export type CreateSharedStateResponse = {
    data?: {
        address: string;
        seed: string;
        viewKey: string;
    };
    error?: string;
};
export declare const createSharedState: () => Promise<CreateSharedStateResponse>;
