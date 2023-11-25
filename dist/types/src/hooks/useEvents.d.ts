import { EventsFilter } from '../messages/events.js';
import { Event } from '@puzzlehq/types';
type UseEventsOptions = {
    filter?: EventsFilter;
    page?: number;
};
export declare const useEvents: ({ filter, page }: UseEventsOptions) => {
    fetchPage: () => void;
    events: Event[] | undefined;
    error: string | undefined;
    loading: boolean;
    page: number | undefined;
    pageCount: number;
};
export {};
