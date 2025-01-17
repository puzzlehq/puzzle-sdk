export type ImportSharedStateRequest = {
    seed: string;
};
export type ImportSharedStateResponse = {
    data: {
        address: string;
        seed: string;
    };
};
export declare const importSharedState: ({ seed, }: ImportSharedStateRequest) => Promise<ImportSharedStateResponse>;
