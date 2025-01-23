import { ImportSharedStateRequest, ImportSharedStateResponse } from '@puzzlehq/sdk-core';
export declare const useImportSharedState: ({ seed }: ImportSharedStateRequest) => {
    importSharedState: () => Promise<ImportSharedStateResponse | undefined>;
    data: {
        address: string;
        seed: string;
    } | undefined;
    loading: boolean;
    error: string | undefined;
};
