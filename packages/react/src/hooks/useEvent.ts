import { useEffect } from 'react';
import {
  getEvent,
  GetEventRequest,
  GetEventResponse,
} from '@puzzlehq/sdk-core';
import { Event } from '@puzzlehq/types';
import { useInjectedRequestQuery } from './utils/useRequest.js';
import { useWalletStore } from '../store.js';
import useInjectedSubscriptions from './utils/useInjectedSubscription.js';
import { useIsConnected } from '../provider/PuzzleWalletProvider.js';

export const useEvent = ({
  id,
  address,
  multisig = false,
  network,
}: GetEventRequest) => {
  const { isConnected } = useIsConnected();
  const [account] = useWalletStore((state) => [state.account]);

  const isEnabled =
    id !== undefined &&
    id !== '' &&
    !!isConnected &&
    !!account &&
    (multisig ? !!address : true);

  const {
    refetch,
    data,
    error: _error,
    isLoading: loading,
  } = useInjectedRequestQuery<GetEventResponse | undefined>({
    queryKey: ['useEvent', account?.address, address, network, multisig, id],
    enabled: isEnabled,
    fetchFunction: async () => {
      return await getEvent({ id, address, network, multisig });
    },
  });

  // listen for injected wallet-originating account updates
  useInjectedSubscriptions({
    configs: [
      {
        subscriptionName: 'onSelectedAccountSynced',
        condition: () => !!id && !multisig,
        onData: () => refetch(),
        onError: (e: Error) => {
          console.error(e);
        },
        dependencies: [id, multisig],
      },
      {
        subscriptionName: 'onSharedAccountSynced',
        condition: (data) => {
          return !!id && !!multisig && data?.address === address;
        },
        onData: () => refetch(),
        onError: (e: Error) => {
          console.error(e);
        },
        dependencies: [id, multisig, address],
      },
    ],
  });

  // send initial events request
  const readyToRequest =
    !!isConnected && !!account && !!id && (multisig ? !!address : true);
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

  const error: string | undefined = (_error as Error)?.message ?? undefined;
  const response: GetEventResponse | undefined = data;
  const event: Event | undefined = response?.event;

  return { fetchEvent, event, error, loading };
};
