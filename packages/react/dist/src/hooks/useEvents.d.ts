import { EventsFilter, Network } from '@puzzlehq/sdk-core';
import { Event } from '@puzzlehq/types';
type UseEventsParams = {
    filter?: EventsFilter;
    page?: number;
    network?: Network;
};
export declare const useEvents: ({ filter, network, page }: UseEventsParams) => {
    fetchPage: () => void;
    events: Event[] | undefined;
    error: string | undefined;
    loading: boolean;
    page: number | undefined;
    pageCount: number;
};
export {};
