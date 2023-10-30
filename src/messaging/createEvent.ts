import { SessionTypes } from "@walletconnect/types";
import { type Record } from "./records.js";

export enum EventType {
  Unknown = 'Unknown',
  Deploy = 'Deploy',
  Execute = 'Execute',
  Send = 'Send',
  Receive = 'Receive',
  Join = 'Join',
  Split = 'Split',
  Shield = 'Shield',
  Unshield = 'Unshield'
}

export enum Visibility {
  Private = 'Private',
  Public = 'Public'
}

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
  wcSession?: SessionTypes.Struct;
}

/// wallet passes this back to dapp
export type CreateEventResponse = {
  eventId?: string;
  /// pass in whole event here?
  error?: string;
}
