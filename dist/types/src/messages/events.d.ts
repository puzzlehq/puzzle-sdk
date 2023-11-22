import { Event, EventType } from '../data/types.js';
export type EventsFilter = {
    type?: EventType;
    programId?: string;
};
export type GetEventsRequest = {
    filter?: EventsFilter;
    page?: number;
};
export type GetEventsResponse = {
    events?: Event[];
    pageCount?: number;
    error?: string;
};
export declare const getEvents: (filter: EventsFilter) => Promise<GetEventsResponse>;
