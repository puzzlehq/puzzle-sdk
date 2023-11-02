import { EventsFilter } from '../messaging/events.js';
import { Event } from '@puzzlehq/types';
type UseEventsOptions = {
    filter?: EventsFilter;
    page?: number;
};
export declare const useEvents: ({ filter, page: initialPage }: UseEventsOptions) => {
    fetchPage: (page: number) => void;
    events: Event[];
    error: string;
    loading: any;
    page: number;
    pageCount: number;
};
export {};
