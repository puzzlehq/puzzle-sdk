import { Network } from '@puzzlehq/types';
export type CreateSharedStateResponse = {
    data?: {
        seed: string;
        address: string;
    };
    error?: string;
};
export declare const createSharedState: (network?: Network) => Promise<CreateSharedStateResponse>;
