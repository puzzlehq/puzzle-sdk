import { useEffect } from 'react';
import { SessionTypes } from '@walletconnect/types';
import { EventsFilter, GetEventsRequest, GetEventsResponse } from '../../core/messages/events.js';
import { Event } from '@puzzlehq/types';
import { useOnSessionEvent, useSession } from '../index.js';
import { useRequestQuery } from './wc/useRequest.js';
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
    queryKey: ['useEvents', account?.address, filter, page, session?.topic],
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
    if (eventName === 'selectedAccountSynced') {
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