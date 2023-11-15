export type CreateSharedStateResponse = {
    data?: {
        seed: string;
        address: string;
    };
    error?: string;
};
export declare const createSharedState: () => Promise<CreateSharedStateResponse>;
