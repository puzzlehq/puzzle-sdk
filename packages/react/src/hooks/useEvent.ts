import { useEffect } from 'react';
import { SessionTypes } from '@walletconnect/types';
import {
  GetEventRequest,
  GetEventResponse,
  hasInjectedConnection,
} from '@puzzlehq/sdk-core';
import { Event } from '@puzzlehq/types';
import { useOnSessionEvent } from './wc/useOnSessionEvent.js';
import { useInjectedRequestQuery, useRequestQuery } from './wc/useRequest.js';
import { useWalletStore } from '../store.js';
import useInjectedSubscriptions from './utils/useInjectedSubscription.js';
import { useWalletSession } from '../provider/PuzzleWalletProvider.js';

type UseEventParams = {
  id?: string;
  address?: string;
  multisig?: boolean;
};

export const useEvent = ({ id, address, multisig = false }: UseEventParams) => {
  const session: SessionTypes.Struct | undefined = useWalletSession();
  const [selectedAddress, chainIdStr] = useWalletStore((state) => [state.address, state.chainIdStr]);

  const useQueryFunction = hasInjectedConnection()
    ? useInjectedRequestQuery
    : useRequestQuery;

  const query = {
    topic: session?.topic,
    chainId: chainIdStr,
    request: {
      jsonrpc: '2.0',
      method: 'getEvent',
      params: {
        id: id ?? '',
        address,
      } as GetEventRequest,
    },
  };

  const isEnabled =
    id !== undefined &&
    id !== '' &&
    !!session &&
    !!selectedAddress &&
    (multisig ? !!address : true);

  const {
    refetch,
    data: wc_data,
    error: wc_error,
    isLoading: loading,
  } = useQueryFunction<GetEventResponse | undefined>({
    queryKey: [
      'useEvent',
      selectedAddress,
      chainIdStr,
      address,
      multisig,
      id,
      session?.topic,
    ],
    enabled: isEnabled,
    fetchFunction: async () => {
      const response: GetEventResponse =
        await window.aleo.puzzleWalletClient.getEvent.query(query);
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
        condition: () => !!id && !multisig,
        onData: () => refetch(),
        dependencies: [id, multisig],
      },
      {
        subscriptionName: 'onSharedAccountSynced',
        condition: (data) => {
          return !!id && !!multisig && data?.address === address;
        },
        onData: () => refetch(),
        dependencies: [id, multisig, address],
      },
    ],
  });

  // listen for mobile wallet-originating account updates
  useOnSessionEvent(({ params, topic }) => {
    const eventName = params.event.name;
    const _address = params.event.address ?? params.event.data.address;
    if (
      !hasInjectedConnection() &&
      ((!!id && eventName === 'selectedAccountSynced' && !multisig) ||
        (!!id &&
          eventName === 'sharedAccountSynced' &&
          multisig &&
          _address === address))
    ) {
      refetch();
    }
  });

  // send initial events request
  const readyToRequest =
    !!session && !!selectedAddress && !!id && (multisig ? !!address : true);
  useEffect(() => {
    if (readyToRequest && !loading) {
      refetch();
    }
  }, [readyToRequest]);

  const fetchEvent = () => {
    if (readyToRequest && !loading) {
      refetch();
    }
  };

  const error: string | undefined = wc_error
    ? (wc_error as Error).message
    : wc_data && wc_data.error;
  const response: GetEventResponse | undefined = wc_data;
  const event: Event | undefined = response?.event;

  return { fetchEvent, event, error, loading };
};
