import { type Record } from "./records.js";
import { EventType } from '@puzzlehq/types';

/// dapps send this to the sdk
export type CreateEventRequestData = {
  type: EventType;
  programId: string;
  functionId: string;
  fee: number;
  inputs: (Record | string)[];
}

/// sdk maps records to ciphertexts
export type CreateEventRequest = {
  type: EventType;
  programId: string;
  functionId: string;
  fee: number;
  inputs: string[];
}

/// wallet passes this back to dapp
export type CreateEventResponse = {
  eventId?: string;
  /// pass in whole event here?
  error?: string;
}
