import { useEffect } from 'react';
import { SessionTypes } from '@walletconnect/types';
import { GetEventRequest, GetEventResponse } from '../messages/event.js';
import { Event } from '@puzzlehq/types';
import { useOnSessionEvent, useSession } from '../index.js';
import { useRequestQuery } from './wc/useRequest.js';
import useWalletStore from '../store.js';

type UseEventParams = {
  id?: string;
  address?: string;
  multisig?: boolean;
}

export const useEvent = ( {id, address, multisig = false}: UseEventParams ) => {
  const session: SessionTypes.Struct | undefined = useSession();
  const [account] = useWalletStore((state) => [state.account]);

  const { refetch, data: wc_data, error: wc_error, isLoading: loading } = useRequestQuery<GetEventResponse | undefined>({
    queryKey: ['useEvent', address ?? account?.address ?? '', id ?? ''],
    enabled: !!id && !!session && !!account && (multisig ? !!address : true) ,
    wcParams: {
      topic: session?.topic ?? '',
      chainId: 'aleo:1',
      request: {
        jsonrpc: '2.0',
        method: 'getEvent',
        params: {
          id,
          address
        } as GetEventRequest
      }
    }
  });

  // listen for wallet-originating account updates
  useOnSessionEvent(({ params, topic }) => {
    const eventName = params.event.name;
    const address = params.event.address;
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

  const fetchEvent = () => {
    const readyToRequest = !!session && !!account;
    if (readyToRequest && !loading) {
      refetch();
    }
  }

  const error: string | undefined = wc_error ? (wc_error as Error).message : (wc_data && wc_data.error);
  const response: GetEventResponse | undefined =  wc_data;
  const event: Event | undefined = response?.event;
  
  return { fetchEvent, event, error, loading };
};