import { Event, EventsFilter } from '../messaging/events.js';
type UseEventsOptions = {
    filter?: EventsFilter;
    page?: number;
};
declare const useEvents: ({ filter, page: initialPage }: UseEventsOptions) => {
    fetchPage: () => void;
    records: Event[];
    error: string;
    loading: any;
    totalRecordCount: number | Event[];
};
export default useEvents;
