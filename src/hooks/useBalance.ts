import { useEffect, useState } from 'react';
import {
  Balance,
  GetBalancesRequest,
  GetBalancesResponse,
} from '../messages/balance.js';
import { getWalletConnectModalSignClient } from '../client.js';
import { useSession } from './wc/useSession.js';
import { SessionTypes } from '@walletconnect/types';
import { useOnSessionDelete } from './wc/useOnSessionDelete.js';
import { useOnSessionEvent } from './wc/useOnSessionEvent.js';

export const useBalance = () => {
  const session: SessionTypes.Struct | undefined = useSession();

  const chainId = 'aleo:1';

  const [balances, setBalances] = useState<Balance[] | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  const request = async () => {
    try {
      setLoading(true);
      const connection = await getWalletConnectModalSignClient();
      const result: GetBalancesResponse = await connection.request({
        topic: session?.topic,
        chainId: chainId,
        request: {
          id: 1,
          jsonrpc: '2.0',
          method: 'getBalance',
          params: {
            assetId: undefined,
          } as GetBalancesRequest,
        },
      });
      setBalances(result.balances);
      setError(result.error);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  };

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

  useOnSessionDelete(({ params, topic }) => {
    setBalances(undefined);
  });

  // send initial balance request...
  useEffect(() => {
    if (session && !loading) {
      request();
    }
    if (!session) {
      setBalances(undefined);
    }
  }, [session]);

  return { balances, error, loading };
};
