export type ImportSharedStateRequest = {
    seed: string;
};
export type ImportSharedStateResponse = {
    data?: {
        address: string;
        seed: string;
    };
    error?: string;
};
export declare const importSharedState: (seed: string, network?: string) => Promise<ImportSharedStateResponse>;
