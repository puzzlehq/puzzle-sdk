import { useEffect } from 'react';
import { SessionTypes } from '@walletconnect/types';
import { GetEventRequest, GetEventResponse } from '../messages/event.js';
import { Event } from '@puzzlehq/types';
import { useOnSessionEvent, useSession } from '../index.js';
import { useRequest } from './wc/useRequest.js';
import useWalletStore from '../store.js';

export const useEvent = ( id: string ) => {
  const session: SessionTypes.Struct | undefined = useSession();
  const [account] = useWalletStore((state) => [state.account]);

  const { request, data: wc_data, error: wc_error, loading } = useRequest<GetEventResponse | undefined>({
    topic: session?.topic ?? '',
    chainId: 'aleo:1',
    request: {
      jsonrpc: '2.0',
      method: 'getEvent',
      params: {
        id,
      } as GetEventRequest
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

  const fetchEvent = () => {
    const readyToRequest = !!session && !!account;
    if (readyToRequest && !loading) {
      request();
    }
  }

  const error: string | undefined = wc_error ? (wc_error as Error).message : (wc_data && wc_data.error);
  const response: GetEventResponse | undefined =  wc_data;
  const event: Event | undefined = response?.event;
  
  return { fetchEvent, event, error, loading };
};