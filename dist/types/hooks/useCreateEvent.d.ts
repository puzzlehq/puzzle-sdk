import { CreateEventRequestData } from '../messaging/createEvent.js';
export declare const useCreateEvent: (requestData: CreateEventRequestData) => {
    createEvent: () => void;
    eventId: any;
    error: string;
    loading: any;
};
