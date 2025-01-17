export type CreateSharedStateResponse = {
    data: {
        seed: string;
        address: string;
    };
};
export declare const createSharedState: () => Promise<CreateSharedStateResponse>;
