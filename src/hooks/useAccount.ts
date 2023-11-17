import { getWalletConnectModalSignClient } from '../client.js';
import { useEffect, useState } from 'react';
import { GetSelectedAccountResponse } from '../messages/account.js';
import { SessionTypes } from '@walletconnect/types';
import { useSession } from './wc/useSession.js';
import { useOnSessionDelete } from './wc/useOnSessionDelete.js';
import { useOnSessionUpdate } from './wc/useOnSessionUpdate.js';
import { useOnSessionEvent } from './wc/useOnSessionEvent.js';
import useWalletStore from '../store.js';

/// ADDRESSES AND ALIASES
export const shortenAddress = (address: string) => {
  const length = 5;
  if (address.length < length * 2) return address;
  return `${address.slice(0, length + 'aleo1'.length)}...${address.slice(
    address.length - length,
    address.length
  )}`;
};

export const useAccount = () => {
  const chainId = 'aleo:1';

  const [account, setAccount] = useWalletStore((state) => [state.account, state.setAccount]);
  const [error, setError] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  const session: SessionTypes.Struct | undefined = useSession();

  const request = async () => {
    if (!session) {
      setLoading(false);
      return;
    }
    try {
      setLoading(true);
      const connection = await getWalletConnectModalSignClient();
      const result: GetSelectedAccountResponse = await connection.request({
        topic: session?.topic,
        chainId: chainId,
        request: {
          id: 1,
          jsonrpc: '2.0',
          method: 'getSelectedAccount',
        },
      });
      setAccount(result.account);
      setError(result.error);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useOnSessionEvent(({ params, topic }) => {
    const eventName = params.event.name;
    if (eventName === 'accountSelected' && session && session.topic === topic) {
      const address = params.event.data;
      const network = params.chainId.split(':')[0];
      const chainId = params.chainId.split(':')[1];
      setAccount({
        network,
        chainId,
        address,
        shortenedAddress: shortenAddress(address),
      });
    }
  });

  useOnSessionUpdate(({ params, topic }) => {
    const address = params.event.data;
    const network = params.chainId.split(':')[0];
    const chainId = params.chainId.split(':')[1];
    setAccount({
      network,
      chainId,
      address,
      shortenedAddress: shortenAddress(address),
    });
  });

  useOnSessionDelete(({ params, topic }) => {
    setAccount(undefined);
  });

  // send initial account request...
  useEffect(() => {
    if (session && !loading) {
      request();
    }
  }, [session]);

  return {
    account,
    error,
    loading,
  };
};
