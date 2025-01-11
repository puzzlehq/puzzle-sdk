import { createContext, useContext } from 'react';
import { useInjectedRequestQuery } from '../hooks/utils/useRequest.js';

type Props = {
  children: React.ReactNode;
};

const ConnectionContext = createContext<boolean | undefined>(undefined);

export const ConnectionProvider = ({
  children
}: Props) => {

  const {
    data,
  } = useInjectedRequestQuery<boolean>({
    queryKey: [
      'isConnected',
    ],
    enabled: true,
    fetchFunction: async () => {
      const response: boolean =
        await window.aleo.puzzleWalletClient.isConnected.query();
      return response;
    },
  });

  return (
    <ConnectionContext.Provider value={data}>
      {children}
    </ConnectionContext.Provider>
  );
};

export const useIsConnected = () => {
  const isConnected = useContext(ConnectionContext);
  return isConnected;
};
