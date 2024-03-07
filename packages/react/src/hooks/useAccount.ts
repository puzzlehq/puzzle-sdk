import { useEffect, useState } from 'react';
import {
  GetSelectedAccountResponse,
  hasInjectedConnection,
} from '@puzzlehq/sdk-core';
import { SessionTypes } from '@walletconnect/types';
import { useSession } from './wc/useSession.js';
import { useOnSessionDelete } from './wc/useOnSessionDelete.js';
import { useOnSessionUpdate } from './wc/useOnSessionUpdate.js';
import { useOnSessionEvent } from './wc/useOnSessionEvent.js';
import { useWalletStore } from '../store.js';
import { useExtensionRequestQuery, useRequestQuery } from './wc/useRequest.js';
import { Unsubscribable } from '@trpc/server/observable';
import useInjectedSubscriptions from './utils/useInjectedSubscription.js';

export const shortenAddress = (
  address?: string,
  aleo: boolean = true,
  length: number = 4,
  short: boolean = true,
) => {
  if (!address) return '';
  if (address.length < length) return address;
  if (short) {
    return `(...${address.slice(-length)})`;
  }
  if (address.length < length * 2) return address;
  return `${address.slice(
    0,
    length + (aleo ? 'aleo1'.length : 0),
  )}...${address.slice(address.length - length, address.length)}`;
};

export const useAccount = () => {
  const session: SessionTypes.Struct | undefined = useSession();

  const [subscription, setSubscription] = useState<
    Unsubscribable | undefined
  >();

  const [account, setAccount, onDisconnect] = useWalletStore((state) => [
    state.account,
    state.setAccount,
    state.onDisconnect,
  ]);

  const useQueryFunction = hasInjectedConnection()
    ? useExtensionRequestQuery
    : useRequestQuery;

  const query = {
    topic: session?.topic,
    chainId: 'aleo:1',
    request: {
      jsonrpc: '2.0',
      method: 'getSelectedAccount',
    },
  };

  const {
    refetch,
    data: wc_data,
    error: wc_error,
    isLoading: loading,
  } = useQueryFunction<GetSelectedAccountResponse | undefined>({
    queryKey: ['useAccount', session?.topic],
    enabled: !!session,
    fetchFunction: async () => {
      const response: GetSelectedAccountResponse =
        await window.aleo.puzzleWalletClient.getSelectedAccount.query(query);
      return response;
    },
    wcParams: query,
  });

  // listen for injected wallet-originating account updates
  useInjectedSubscriptions({
    session,
    configs: [
      {
        subscriptionName: 'onAccountSelected',
        condition: (data) => {
          return !!data?.address
        },
        onData: (data) => {
          const network = data.chain?.split(':')[0] ?? 'aleo';
          const chainId = data.chain?.split(':')[1] ?? '1';
          setAccount({
            network,
            chainId,
            address: data.address,
            shortenedAddress: shortenAddress(data.address),
          });
        },
      },
    ],
  });

  // listen for mobile wallet-originating account updates
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

  const error: string | undefined = wc_error
    ? (wc_error as Error).message
    : wc_data && wc_data.error;

  return {
    account,
    error,
    loading,
  };
};
