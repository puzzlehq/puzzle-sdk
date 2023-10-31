import { EventType } from "./createEvent.js";

export type Event = {
  id: string;
  type: EventType;
  programId?: string;
  functionId?: string;
  inputs: string[];
};

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
  totalEventCount?: number;
  error?: string;
}
