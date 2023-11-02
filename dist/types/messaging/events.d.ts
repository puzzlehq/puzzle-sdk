import { Event, EventType } from '@puzzlehq/types';
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
