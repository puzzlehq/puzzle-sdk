import { Event, EventType, networkToChainId, wc_aleo_chains } from '../index.js';
import { getWalletConnectModalSignClient } from '../client.js';
import { SessionTypes } from '@walletconnect/types';
import { hasInjectedConnection } from '../utils/clientInfo.js';
import { Network } from '@puzzlehq/types';

export type EventsFilter = {
  type?: EventType;
  programId?: string;
  functionId?: string;
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
  filter: EventsFilter,
  network?: Network,
): Promise<GetEventsResponse> => {
  const connection = await getWalletConnectModalSignClient();

  const session: SessionTypes.Struct | undefined =
    await connection?.getSession();

  if (!session || !connection) {
    return { events: undefined, error: 'no session or connection' };
  }

  if (filter?.programId === '') {
    filter.programId = undefined;
  }
  if (!session || !connection) {
    return { error: 'no session or connection' };
  }
  if (network && !wc_aleo_chains.includes(networkToChainId(network))) {
    return { error: 'network not in wc_aleo_chains' };
  }

  const query = {
    topic: session.topic,
    chainId: network ? networkToChainId(network) : 'aleo:0',
    request: {
      jsonrpc: '2.0',
      method: 'getEvents',
      params: {
        filter,
        page: 0,
      } as GetEventsRequest,
    },
  };

  if (hasInjectedConnection()) {
    try {
      const response: GetEventsResponse =
        await window.aleo.puzzleWalletClient.getEvents.query(query);
      return response;
    } catch (e) {
      console.error('getEvents error', e);
      const error = (e as Error).message;
      return { error };
    }
  }

  const fetchPage = async (page = 0) => {
    const response: GetEventsResponse = await connection.request(query);
    return response;
  };

  try {
    const response = await fetchPage();
    return response;
  } catch (e) {
    console.error('getEvents error', e);
    const error = (e as Error).message;
    return { error };
  }
};
