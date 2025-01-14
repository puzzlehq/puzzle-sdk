import { createContext, useContext, useState } from 'react';
import { useInjectedRequestQuery } from '../hooks/utils/useRequest.js';
import { useWalletStore } from '../store.js';
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
  const [account, onDisconnect] = useWalletStore(useShallow((state) => [state.account, state.onDisconnect, state.setAccount]))

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

  return (
    <ConnectionContext.Provider value={{isConnected, setIsConnected}}>
      {children}
    </ConnectionContext.Provider>
  );
};
