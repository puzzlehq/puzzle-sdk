import { createContext, useContext, useEffect, useState } from 'react';
import { useInjectedRequestQuery } from '../hooks/utils/useRequest.js';
import { useWalletStore } from '../store.js';
import useInjectedSubscriptions from '../hooks/utils/useInjectedSubscription.js';
import { AccountSelectedResponse, AccountSyncedResponse } from '@puzzlehq/sdk-core';
import { shortenAddress } from '../hooks/useAccount.js';
import { useShallow } from 'zustand/react/shallow';

type Props = {
  children: React.ReactNode;
};

type ConnectionContextType = {
  isConnected?: boolean;
  setIsConnected: (value: boolean) => void;
};

export const ConnectionContext = createContext<ConnectionContextType | undefined>(undefined);

export const useIsConnected = () => {
  const context = useContext(ConnectionContext);
  if (!context) {
    throw new Error('useIsConnected must be used within a ConnectionProvider');
  }
  return { isConnected: context?.isConnected, setIsConnected: context?.setIsConnected };
};

export const ConnectionProvider = ({
  children
}: Props) => {
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [account, onDisconnect, setAccount] = useWalletStore(useShallow((state) => [state.account, state.onDisconnect, state.setAccount]))

  useInjectedRequestQuery<boolean>({
    queryKey: [
      'isConnected',
    ],
    enabled: true,
    fetchFunction: async () => {
      const response: boolean =
        await window.aleo.puzzleWalletClient.isConnected.query();
      if (response === false && account) {
        onDisconnect();
      }
      setIsConnected(response);
      return response;
    },
  });

  useInjectedSubscriptions({
    configs: [
      {
        subscriptionName: 'onAccountSelected',
        condition: () => {
          return isConnected;
        },
        onData: (data: AccountSelectedResponse) => {
          setAccount({
            network: data.network,
            address: data.address,
            shortenedAddress: shortenAddress(data.address),
          });
        },
        onError: (e: Error) => {
          console.error(e)
        },
        dependencies: [isConnected],
      },
      {
        subscriptionName: 'onSelectedAccountSynced',
        condition: () => {
          return isConnected;
        },
        onData: (data: AccountSyncedResponse) => {
          setAccount({
            network: data.network,
            address: data.address,
            shortenedAddress: shortenAddress(data.address),
          });
        },
        onError: (e: Error) => {
          console.error(e)
        },
        dependencies: [isConnected],
      },
      {
        subscriptionName: 'onDisconnect',
        condition: () => isConnected,
        onData: () => {
          onDisconnect();
          setIsConnected(false);
        },
        onError: (e: Error) => {
          console.error(e)
        },
        dependencies: [isConnected],
      },
    ],
  });

  return (
    <ConnectionContext.Provider value={{isConnected, setIsConnected}}>
      {children}
    </ConnectionContext.Provider>
  );
};
