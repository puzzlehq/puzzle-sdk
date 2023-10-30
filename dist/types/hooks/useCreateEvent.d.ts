import { CreateEventRequestData } from '../messaging/createEvent.js';
export declare const useRequestCreateEvent: (requestData?: CreateEventRequestData) => {
    requestCreateEvent: () => void;
    eventId: string;
    error: string;
    loading: any;
};
