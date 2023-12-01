import { Event, EventType } from '../data/types.js';
import { getWalletConnectModalSignClient } from '../client.js';
import { SessionTypes } from '@walletconnect/types';

export type EventsFilter = {
  type?: EventType;
  programId?: string;
  functionId?: string;
  id?: string; // mongo id
  txId?: string; // aleo id
};

export type GetEventsRequest = {
  filter?: EventsFilter;
  page?: number;
};

export type GetEventsResponse = {
  events?: Event[];
  pageCount?: number;
  error?: string;
};

export const getEvents = async (
  filter: EventsFilter
): Promise<GetEventsResponse> => {
  const connection = await getWalletConnectModalSignClient();

  const session: SessionTypes.Struct | undefined =
    await connection?.getSession();
  const chainId = 'aleo:1';

  if (!session || !chainId || !connection) {
    return { events: undefined, error: 'no session, chainId, or connection' };
  }

  if (filter?.programId === '') {
    filter.programId = undefined;
  }

  const fetchPage = async (page = 0) => {
    const response: GetEventsResponse = await connection.request({
      topic: session?.topic ?? '',
      chainId: chainId,
      request: {
          jsonrpc: '2.0',
        method: 'getEvents',
        params: {
          filter,
          page,
        } as GetEventsRequest,
      },
    });
    return response;
  };

  try {
    const response = await fetchPage();
    return response;
  } catch (e) {
    const error = (e as Error).message;
    console.error('getEvents error', error);
    return { error };
  }
};
