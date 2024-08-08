import { ImportSharedStateResponse } from '@puzzlehq/sdk-core';
export declare const useImportSharedState: (seed?: string) => {
    importSharedState: () => Promise<ImportSharedStateResponse | undefined>;
    data: {
        address: string;
        seed: string;
    } | undefined;
    loading: boolean;
    error: string | undefined;
};
