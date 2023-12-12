import { useEffect } from 'react';
import { SessionTypes } from '@walletconnect/types';
import { EventsFilter, GetEventsRequest, GetEventsResponse } from '../messages/events.js';
import { Event } from '@puzzlehq/types';
import { useOnSessionEvent, useSession } from '../index.js';
import { useRequest, useRequestQuery } from './wc/useRequest.js';
import useWalletStore from '../store.js';

type UseEventsParams = {
  filter?: EventsFilter,
  page?: number
}

export const useEvents = ( { filter, page }: UseEventsParams ) => {
  const session: SessionTypes.Struct | undefined = useSession();
  const [account] = useWalletStore((state) => [state.account]);

  if (filter?.programId === '') {
    filter.programId = undefined;
  }

  const { refetch, data: wc_data, error: wc_error, isLoading: loading } = useRequestQuery<GetEventsResponse | undefined>({
    queryKey: ['useEvents', account?.address, filter, page],
    enabled: !!session && !!account,
    wcParams: {
      topic: session?.topic ?? '',
      chainId: 'aleo:1',
      request: {
        jsonrpc: '2.0',
        method: 'getEvents',
        params: {
          filter,
          page,
        } as GetEventsRequest
      }
    }
  });

  // listen for wallet-originating account updates
  useOnSessionEvent(({ id, params, topic }) => {
    const eventName = params.event.name;
    const address = params.event.address ?? params.event.data.address;
    if (eventName === 'selectedAccountSynced' && session && session.topic === topic && address === account?.address && !loading) {
      refetch();
    }
  });

  // send initial events request
  const readyToRequest = !!session && !!account;
  useEffect(() => {
    if (readyToRequest && !loading) {
      refetch();
    }
  }, [readyToRequest]);

  const fetchPage = () => {
    const readyToRequest = !!session && !!account;
    if (readyToRequest && !loading) {
      refetch();
    }
  }

  const error: string | undefined = wc_error ? (wc_error as Error).message : (wc_data && wc_data.error);
  const response: GetEventsResponse | undefined =  wc_data;
  const events: Event[] | undefined = response?.events;
  const pageCount = response?.pageCount ?? 0;
  
  return { fetchPage, events, error, loading, page, pageCount };
};