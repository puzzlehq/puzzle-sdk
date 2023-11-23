import { EventsFilter } from '../messages/events.js';
import { Event } from '@puzzlehq/types';
type UseEventsOptions = {
    filter?: EventsFilter;
    page?: number;
};
export declare const useEvents: ({ filter, page }: UseEventsOptions) => {
    fetchPage: () => void;
    events: Event[];
    error: string;
    loading: boolean;
    page: number;
    pageCount: number;
};
export {};
