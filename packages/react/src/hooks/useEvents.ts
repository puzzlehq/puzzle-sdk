import { useEffect } from 'react';
import { SessionTypes } from '@walletconnect/types';
import {
  EventsFilter,
  GetEventsRequest,
  GetEventsResponse,
  hasInjectedConnection,
  Network,
  networkToChainId,
} from '@puzzlehq/sdk-core';
import { Event } from '@puzzlehq/types';
import { useInjectedRequestQuery, useRequestQuery } from './wc/useRequest.js';
import { useWalletStore } from '../store.js';
import { useOnSessionEvent } from './wc/useOnSessionEvent.js';
import { useDebounce } from 'use-debounce';
import useInjectedSubscriptions from './utils/useInjectedSubscription.js';
import { useWalletSession } from '../provider/PuzzleWalletProvider.js';

type UseEventsParams = {
  filter?: EventsFilter;
  page?: number;
  network?: Network
};

export const useEvents = ({ filter, network, page }: UseEventsParams) => {
  const session: SessionTypes.Struct | undefined = useWalletSession();
  const [address, chainIdStr] = useWalletStore((state) => [state.address, state.chainIdStr]);

  if (filter?.programId === '') {
    filter.programId = undefined;
  }

  const useQueryFunction = hasInjectedConnection()
    ? useInjectedRequestQuery
    : useRequestQuery;

  const query = {
    topic: session?.topic ?? '',
    chainId: chainIdStr,
    request: {
      jsonrpc: '2.0',
      method: 'getEvents',
      params: {
        filter,
        page,
      } as GetEventsRequest,
    },
  };

  const [debouncedFilter] = useDebounce(filter, 500);

  const {
    refetch,
    data: wc_data,
    error: wc_error,
    isLoading: loading,
  } = useQueryFunction<GetEventsResponse | undefined>({
    queryKey: [
      'useEvents',
      address,
      chainIdStr,
      JSON.stringify(debouncedFilter),
      page,
      session?.topic,
    ],
    enabled: !!session && !!address,
    fetchFunction: async () => {
      const response: GetEventsResponse =
        await window.aleo.puzzleWalletClient.getEvents.query(query);
      return response;
    },
    wcParams: query,
  });

  // listen for injected wallet-originating account updates
  useInjectedSubscriptions({
    session,
    configs: [
      {
        subscriptionName: 'onSelectedAccountSynced',
        condition: () => true,
        onData: () => refetch(),
        dependencies: [],
      },
    ],
  });

  // listen for mobile wallet-originating account updates
  useOnSessionEvent(({ params }) => {
    const eventName = params.event.name;
    if (!hasInjectedConnection() && eventName === 'selectedAccountSynced') {
      refetch();
    }
  });

  // send initial events request
  const readyToRequest = !!session && !!address;
  useEffect(() => {
    if (readyToRequest && !loading) {
      refetch();
    }
  }, [readyToRequest]);

  const fetchPage = () => {
    if (readyToRequest && !loading) {
      refetch();
    }
  };

  const error: string | undefined = wc_error
    ? (wc_error as Error).message
    : wc_data && wc_data.error;
  const response: GetEventsResponse | undefined = wc_data;
  const events: Event[] | undefined = response?.events;
  const pageCount = response?.pageCount ?? 0;

  return { fetchPage, events, error, loading, page, pageCount };
};
