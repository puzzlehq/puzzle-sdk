import { createContext, useContext, useEffect, useState } from 'react';
import { useInjectedRequestQuery } from '../hooks/utils/useRequest.js';
import { useWalletStore } from '../store.js';
import { ConnectResponse, PuzzleWalletSDKEventEmitter, shortenAddress } from '@puzzlehq/sdk-core';

type Props = {
  children: React.ReactNode;
};

type ConnectionContextType = {
  isConnected?: boolean;
  setIsConnected: (value: boolean) => void;
};

export const ConnectionContext = createContext<
  ConnectionContextType | undefined
>(undefined);

export const useIsConnected = () => {
  const context = useContext(ConnectionContext);
  if (!context) {
    throw new Error('useIsConnected must be used within a ConnectionProvider');
  }

  useEffect(() => {
    console.log(`isConnected: ${context.isConnected}`)
  }, [context.isConnected])

  return {
    isConnected: context?.isConnected,
    setIsConnected: context?.setIsConnected,
  };
};

export const ConnectionProvider = ({ children }: Props) => {
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [account, onDisconnect, setAccount] = useWalletStore(
    (state) => [
      state.account,
      state.onDisconnect,
      state.setAccount,
    ],
  );

  useEffect(() => {
    PuzzleWalletSDKEventEmitter.on('connectSuccess', (response: ConnectResponse) => {
      console.log('PuzzleWalletSDKEventEmitter.on(\'connectSuccess\') called!')
      if (response.connection) {
        setIsConnected(true);
        setAccount({
          address: response.connection.address,
          network: response.connection.network,
          shortenedAddress: shortenAddress(response.connection.address)
        })
      }
    })

    PuzzleWalletSDKEventEmitter.on('disconnectSuccess', () => {
      setIsConnected(false);
      onDisconnect();
    });
  }, [])

  useInjectedRequestQuery<boolean>({
    queryKey: ['isConnected'],
    enabled: true,
    fetchFunction: async () => {
      const response: boolean =
        await window.aleo.puzzleWalletClient.isConnected.query({
          method: 'isConnected',
        });
      if (response === false && account) {
        console.log(`ConnectionProvider isConnected: false, disconnecting`)
        onDisconnect();
      }
      setIsConnected(response);
      return response;
    },
  });

  return (
    <ConnectionContext.Provider value={{ isConnected, setIsConnected }}>
      {children}
    </ConnectionContext.Provider>
  );
};
