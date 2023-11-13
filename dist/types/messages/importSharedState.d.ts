export type ImportSharedStateRequest = {
    seed: string;
};
export type ImportSharedStateResponse = {
    data?: {
        address: string;
        seed: string;
        viewKey: string;
    };
    error?: string;
};
export declare const importSharedState: (seed: string) => Promise<ImportSharedStateResponse>;
