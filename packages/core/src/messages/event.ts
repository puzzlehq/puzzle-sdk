import { Event, GenericRequest } from '../index.js';
import { hasInjectedConnection } from '../utils/clientInfo.js';
import { SdkError } from '../data/errors.js';
import { Network } from '@puzzlehq/types';

export type GetEventRequest = {
  id: string;
  address?: string;
  network?: Network;
  multisig?: boolean;
};

export type GetEventResponse = {
  event: Event;
};

export const getEvent = async ({
  id,
  address,
  network,
}: GetEventRequest): Promise<GetEventResponse> => {
  if (!hasInjectedConnection())
    throw new Error(`getEvent ${SdkError.PuzzleWalletNotDetected}`);
  if (!window.aleo.puzzleWalletClient.getEvent?.query)
    throw new Error('getEvent.query not found!');

  const query: GenericRequest = {
    method: 'getEvent',
    params: {
      id,
      address,
      network,
    } as GetEventRequest,
  };

  try {
    const response: GetEventResponse =
      await window.aleo.puzzleWalletClient.getEvent.query(query);
    return response;
  } catch (e) {
    console.error('getEvent error', e);
    throw e
  }
};
