import { useEffect } from 'react';
import {
  GenericRequest,
  GetEventsRequest,
  GetEventsResponse,
} from '@puzzlehq/sdk-core';
import { Event } from '@puzzlehq/types';
import { useInjectedRequestQuery } from './utils/useRequest.js';
import { useWalletStore } from '../store.js';
import { useDebounce } from 'use-debounce';
import useInjectedSubscriptions from './utils/useInjectedSubscription.js';
import { useIsConnected } from '../provider/PuzzleWalletProvider.js';
import { useShallow } from 'zustand/react/shallow';

export const useEvents = ({
  filter,
  page,
  address,
  network,
}: GetEventsRequest) => {
  const { isConnected } = useIsConnected();
  const [account] = useWalletStore(useShallow((state) => [state.account]));

  if (filter?.programId === '') {
    filter.programId = undefined;
  }

  const query: GenericRequest = {
    method: 'getEvents',
    params: {
      filter,
      page,
      address,
      network,
    } as GetEventsRequest,
  };

  const [debouncedFilter] = useDebounce(filter, 500);

  const {
    refetch,
    data: wc_data,
    error: wc_error,
    isLoading: loading,
  } = useInjectedRequestQuery<GetEventsResponse | undefined>({
    queryKey: [
      'useEvents',
      account?.address,
      JSON.stringify(debouncedFilter),
      page,
    ],
    enabled: !!isConnected,
    fetchFunction: async () => {
      const response: GetEventsResponse =
        await window.aleo.puzzleWalletClient.getEvents.query(query);
      return response;
    },
  });

  // listen for injected wallet-originating account updates
  useInjectedSubscriptions({
    configs: [
      {
        subscriptionName: 'onSelectedAccountSynced',
        condition: () => true,
        onData: () => isConnected && refetch(),
        onError: (e: Error) => {
          console.error(e);
        },
        dependencies: [isConnected],
      },
    ],
  });

  // send initial events request
  const readyToRequest = !!isConnected && !!account;
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
