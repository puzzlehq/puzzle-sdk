import { Event, EventType } from '../index.js';
import { Network } from '@puzzlehq/types';
export type EventsFilter = {
    type?: EventType;
    programId?: string;
    functionId?: string;
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
export declare const getEvents: (filter: EventsFilter, network?: Network) => Promise<GetEventsResponse>;
