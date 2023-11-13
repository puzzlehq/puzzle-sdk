export type ImportSharedStateRequest = {
    seed: string;
};
export type ImportSharedStateResponse = {
    address?: string;
    error?: string;
};
export declare const importSharedState: (seed: string) => Promise<ImportSharedStateResponse>;
