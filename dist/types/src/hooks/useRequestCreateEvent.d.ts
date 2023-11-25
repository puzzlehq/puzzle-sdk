import { CreateEventRequestData } from '../messages/createEvent.js';
export declare const useRequestCreateEvent: (requestData?: CreateEventRequestData) => {
    requestCreateEvent: () => void;
    eventId: string | undefined;
    error: string | undefined;
    loading: boolean;
};
