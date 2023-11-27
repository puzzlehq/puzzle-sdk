import { useEffect, useState } from 'react';
import {
  Balance,
  GetBalancesRequest,
  GetBalancesResponse,
} from '../messages/balance.js';
import { useSession } from './wc/useSession.js';
import { SessionTypes } from '@walletconnect/types';
import { useOnSessionEvent } from './wc/useOnSessionEvent.js';
import { useRequest } from './wc/useReact.js';

export const useBalance = () => {
  const session: SessionTypes.Struct | undefined = useSession();

  const chainId = 'aleo:1';

  const { request, data: wc_data, error: wc_error, loading } = useRequest({
    topic: session?.topic,
    chainId: chainId,
    request: {
      id: 1,
      jsonrpc: '2.0',
      method: 'getBalance',
      params: {
        assetId: undefined
      } as GetBalancesRequest
    },
  });

  useOnSessionEvent(({ params, topic }) => {
    const eventName = params.event.name;
    if (
      (eventName === 'accountSynced' || eventName === 'accountSelected') &&
      session &&
      session.topic === topic &&
      !loading
    ) {
      request();
    }
  });

  // send initial balance request...
  useEffect(() => {
    if (session && !loading) {
      request();
    }
  }, [session?.topic]);

  const error: string | undefined = wc_error ? (wc_error as Error).message : (wc_data && wc_data.error);
  const response: GetBalancesResponse | undefined =  wc_data;
  const balances: Balance[] | undefined = response?.balances;

  return { balances, error, loading };
};
