import { Event, EventType, GenericRequest } from '../index.js';
import { hasInjectedConnection } from '../utils/clientInfo.js';
import { Network } from '@puzzlehq/types';
import { SdkError } from '../data/errors.js';

export type EventsFilter = {
  type?: EventType;
  programId?: string;
  functionId?: string;
};

export type GetEventsRequest = {
  filter?: EventsFilter;
  page?: number;
  address?: string;
  network?: Network;
};

export type GetEventsResponse = {
  events: Event[];
  pageCount: number;
};

export const getEvents = async ({
  filter,
  page = 0,
  address,
  network,
}: GetEventsRequest): Promise<GetEventsResponse> => {
  if (!hasInjectedConnection())
    throw new Error(`getEvents ${SdkError.PuzzleWalletNotDetected}`);
  if (!window.aleo.puzzleWalletClient.getEvents?.query)
    throw new Error('getEvents.query not found!');

  const query: GenericRequest = {
    method: 'getEvents',
    params: {
      filter,
      page,
      address,
      network,
    } as GetEventsRequest,
  };

  try {
    const response: GetEventsResponse =
      await window.aleo.puzzleWalletClient.getEvents.query(query);
    return response;
  } catch (e) {
    console.error('getEvents error', e);
    throw e
  }
};
