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
    address?: string;
    network?: Network;
};
export type GetEventsResponse = {
    events: Event[];
    pageCount: number;
};
export declare const getEvents: ({ filter, page, address, network, }: GetEventsRequest) => Promise<GetEventsResponse>;
