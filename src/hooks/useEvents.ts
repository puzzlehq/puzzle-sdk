import { useState, useEffect } from 'react';
import { SessionTypes } from '@walletconnect/types';
import useClientWalletStore from './clientWalletStore.js';
import { useOnSessionEvent, useRequest, useSession } from '@walletconnect/modal-sign-react';
import { Event, EventsFilter, GetEventsRequest, GetEventsResponse } from '../messaging/events.js';

type UseEventsOptions = {
  filter?: EventsFilter,
  page?: number
}

const useEvents = ( { filter, page: initialPage }: UseEventsOptions ) => {
  const session: SessionTypes.Struct = useSession();
  const [chainId, account] = useClientWalletStore((state) => [
    state.chainId,
    state.account
  ]);

  if (filter?.programId === '') {
    filter.programId = undefined;
  }

  const [page, setPage] = useState(initialPage ?? 0);

  const { request, data: wc_data, error: wc_error, loading } = useRequest({
    topic: session?.topic ?? '',
    chainId: chainId,
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
    if (eventName === 'accountSynced' && session && session.topic === topic && !loading) {
      request();
    }
  });

  // send initial events request
  const readyToRequest = !!session && !!account;
  useEffect(() => {
    if (readyToRequest && !loading) {
      request();
    }
  }, [readyToRequest, account]);

  const fetchPage = () => {
    const readyToRequest = !!session && !!account;
    if (readyToRequest && !loading) {
      setPage(prev => prev + 1);
      request();
    }
  }

  const error: string | undefined = wc_error ? wc_error.message : (wc_data && wc_data.error);
  const response: GetEventsResponse | undefined =  wc_data;
  const records: Event[] | undefined = response?.events;
  const totalRecordCount = response?.events ?? 0;

  return { fetchPage, records, error, loading, totalRecordCount };
};

export default useEvents;