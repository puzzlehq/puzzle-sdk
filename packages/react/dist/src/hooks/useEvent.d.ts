import { GetEventRequest } from '@puzzlehq/sdk-core';
import { Event } from '@puzzlehq/types';
export declare const useEvent: ({ id, address, multisig, network, }: GetEventRequest) => {
    fetchEvent: () => void;
    event: Event | undefined;
    error: string;
    loading: boolean;
};
