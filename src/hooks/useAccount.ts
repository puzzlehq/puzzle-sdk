import { useEffect } from 'react';
import { GetSelectedAccountResponse } from '../messages/account.js';
import { SessionTypes } from '@walletconnect/types';
import { useSession } from './wc/useSession.js';
import { useOnSessionDelete } from './wc/useOnSessionDelete.js';
import { useOnSessionUpdate } from './wc/useOnSessionUpdate.js';
import { useOnSessionEvent } from './wc/useOnSessionEvent.js';
import useWalletStore from '../store.js';
import { useRequestQuery } from './wc/useRequest.js';

export const shortenAddress = (
  address?: string,
  aleo: boolean = true,
  length: number = 4,
  short: boolean = true
) => {
  if (!address) return '';
  if (address.length < length) return address;
  if (short) {
    return `(...${address.slice(-length)})`;
  }
  if (address.length < length * 2) return address;
  return `${address.slice(
    0,
    length + (aleo ? 'aleo1'.length : 0)
  )}...${address.slice(address.length - length, address.length)}`;
};

export const useAccount = () => {
  const session: SessionTypes.Struct | undefined = useSession();
  const chainId = 'aleo:1';

  const [account, setAccount, onDisconnect] = useWalletStore((state) => [state.account, state.setAccount, state.onDisconnect]);

  const { refetch, data: wc_data, error: wc_error, isLoading: loading } = useRequestQuery<GetSelectedAccountResponse | undefined>({
    queryKey: ['useAccount', session?.topic],
    enabled: !!session,
    wcParams: {
      topic: session?.topic,
      chainId: chainId,
      request: {
        jsonrpc: '2.0',
        method: 'getSelectedAccount'
      },
    }
  });

  useOnSessionEvent(({ params, topic }) => {
    const eventName = params.event.name;
    if (eventName === 'accountSelected' && session && session.topic === topic) {
      const address = params.event.address ?? params.event.data.address;

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
    const address = params.event.address ?? params.event.data.address;

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
    onDisconnect();
  });
  
  // send initial account request...
  useEffect(() => {
    if (session && !loading) {
      refetch();
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
