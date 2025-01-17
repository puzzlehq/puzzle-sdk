import { GetEventsRequest } from '@puzzlehq/sdk-core';
import { Event } from '@puzzlehq/types';
export declare const useEvents: ({ filter, page, address, network, }: GetEventsRequest) => {
    fetchPage: () => void;
    events: Event[] | undefined;
    error: string;
    loading: boolean;
    page: number | undefined;
    pageCount: number;
};
