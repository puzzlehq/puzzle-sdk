import { EventType, GenericRequest, hasInjectedConnection } from '../index.js';
import { Network, type RecordWithPlaintext } from '@puzzlehq/types';
import { SdkError } from '../data/errors.js';

export type SettlementStatus =
  | 'Settled'
  | 'SettledWithRecords'
  | 'Pending'
  | 'Creating'
  | 'Failed';

/// dapps send this to the sdk
export type CreateEventRequestData = {
  address?: string;
  network?: Network;
  type: EventType;
  programId: string;
  functionId: string;
  fee: number;
  feeRecord?: RecordWithPlaintext;
  inputs: (RecordWithPlaintext | string)[];
  tokenIds?: string[];
  settlementInfo?: {
    eventId?: string;
    expectedRecordCount: number;
    currentRecordCount: number;
  };
};

/// sdk maps records to ciphertexts
export type CreateEventRequest = {
  address?: string;
  network?: Network;
  type: EventType;
  programId: string;
  functionId: string;
  fee: number;
  feeRecord?: RecordWithPlaintext;
  inputs: string[];
  tokenIds?: string[];
};

/// wallet passes this back to dapp
export type CreateEventResponse = {
  eventId?: string;
  error?: string;
};

export const requestCreateEvent = async (
  requestData: CreateEventRequestData,
): Promise<CreateEventResponse> => {
  if (!hasInjectedConnection())
    throw new Error(`requestCreateEvent ${SdkError.PuzzleWalletNotDetected}`);
  if (!window.aleo.puzzleWalletClient.requestCreateEvent?.mutate)
    throw new Error('requestCreateEvent.mutate not found!');

  const inputs = requestData?.inputs.map((input) => {
    if (typeof input === 'string') {
      return input;
    }
    return input.plaintext;
  });

  const req: GenericRequest = {
    method: 'requestCreateEvent',
    params: {
      ...requestData,
      inputs,
    } as CreateEventRequest,
  };

  try {
    const response: CreateEventResponse =
      await window.aleo.puzzleWalletClient.requestCreateEvent.mutate(req);
    return response;
  } catch (e) {
    console.error('createEvent error', e);
    throw e
  }
};
