import { CreateSharedStateResponse } from '@puzzlehq/sdk-core';
export declare const useCreateSharedState: () => {
    createSharedState: () => Promise<CreateSharedStateResponse | undefined>;
    data: {
        seed: string;
        address: string;
    } | undefined;
    loading: boolean;
    error: string | undefined;
};
