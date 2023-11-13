export type CreateSharedStateResponse = {
    seed?: string;
    error?: string;
};
export declare const createSharedState: () => Promise<CreateSharedStateResponse>;
