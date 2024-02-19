import { CreateEventRequestData } from '../../core/messages/createEvent.js';
export declare const useRequestCreateEvent: (requestData?: CreateEventRequestData) => {
    createEvent: () => void;
    eventId: string | undefined;
    loading: boolean;
    error: string | undefined;
};
