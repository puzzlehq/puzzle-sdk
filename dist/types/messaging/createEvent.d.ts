import { type Record } from "./records.js";
export declare enum EventType {
    Unknown = "Unknown",
    Deploy = "Deploy",
    Execute = "Execute",
    Send = "Send",
    Receive = "Receive",
    Join = "Join",
    Split = "Split",
    Shield = "Shield",
    Unshield = "Unshield"
}
export declare enum Visibility {
    Private = "Private",
    Public = "Public"
}
export type CreateEventRequestData = {
    type: EventType;
    programId: string;
    functionId: string;
    fee: number;
    inputs: (Record | string)[];
};
export type CreateEventRequest = {
    type: EventType;
    programId: string;
    functionId: string;
    fee: number;
    inputs: string[];
};
export type CreateEventResponse = {
    eventId?: string;
    error?: string;
};
