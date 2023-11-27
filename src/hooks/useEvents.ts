import { useEffect } from 'react';
import { SessionTypes } from '@walletconnect/types';
import { EventsFilter, GetEventsRequest, GetEventsResponse } from '../messages/events.js';
import { Event } from '@puzzlehq/types';
import { useOnSessionEvent, useSession } from '../index.js';
import { useRequest } from './wc/useReact.js';
import useWalletStore from '../store.js';

type UseEventsOptions = {
  filter?: EventsFilter,
  page?: number
}

export const useEvents = ( { filter, page }: UseEventsOptions ) => {
  const session: SessionTypes.Struct | undefined = useSession();
  const [account] = useWalletStore((state) => [state.account]);

  if (filter?.programId === '') {
    filter.programId = undefined;
  }

  const { request, data: wc_data, error: wc_error, loading } = useRequest({
    topic: session?.topic ?? '',
    chainId: 'aleo:1',
    request: {
      id: 1,
      jsonrpc: '2.0',
      method: 'getEvents',
      params: {
        filter,
        page,
      } as GetEventsRequest
    }
  });

  // listen for wallet-originating account updates
  useOnSessionEvent(({ id, params, topic }) => {
    const eventName = params.event.name;
    const address = params.event.address;
    if (eventName === 'selectedAccountSynced' && session && session.topic === topic && address === account?.address && !loading) {
      request();
    }
  });

  // send initial events request
  const readyToRequest = !!session && !!account;
  useEffect(() => {
    if (readyToRequest && !loading) {
      request();
    }
  }, [readyToRequest]);

  const fetchPage = () => {
    const readyToRequest = !!session && !!account;
    if (readyToRequest && !loading) {
      request();
    }
  }

  const error: string | undefined = wc_error ? (wc_error as Error).message : (wc_data && wc_data.error);
  const response: GetEventsResponse | undefined =  wc_data;
  const events: Event[] | undefined = response?.events;
  const pageCount = response?.pageCount ?? 0;
  
  return { fetchPage, events, error, loading, page, pageCount };
};