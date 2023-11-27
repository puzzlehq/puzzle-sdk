import { useEffect } from 'react';
import { GetSelectedAccountResponse } from '../messages/account.js';
import { SessionTypes } from '@walletconnect/types';
import { useSession } from './wc/useSession.js';
import { useOnSessionDelete } from './wc/useOnSessionDelete.js';
import { useOnSessionUpdate } from './wc/useOnSessionUpdate.js';
import { useOnSessionEvent } from './wc/useOnSessionEvent.js';
import useWalletStore from '../store.js';
import { useRequest } from './wc/useReact.js';

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
  const session: SessionTypes.Struct | undefined = useSession();
  const chainId = 'aleo:1';

  const [account, setAccount] = useWalletStore((state) => [state.account, state.setAccount]);

  const { request, data: wc_data, error: wc_error, loading } = useRequest({
    topic: session?.topic,
    chainId: chainId,
    request: {
      id: 1,
      jsonrpc: '2.0',
      method: 'getSelectedAccount'
    },
  });

  useOnSessionEvent(({ params, topic }) => {
    const eventName = params.event.name;
    if (eventName === 'accountSelected' && session && session.topic === topic) {
      const address = params.event.address;
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
    const address = params.event.address;
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
  request
  // send initial account request...
  useEffect(() => {
    if (session && !loading) {
      request();
    }
  }, [session?.topic]);

  // ...and listen for a response
  useEffect(() => { 
    if (wc_data) {
      const puzzleData: GetSelectedAccountResponse | undefined = wc_data;
      const account = puzzleData?.account;
      if (account) {
        setAccount(account);
      }
    }
  }, [wc_data]);

  const error: string | undefined = wc_error ? (wc_error as Error).message : (wc_data && wc_data.error);

  return {
    account,
    error,
    loading,
  };
};
