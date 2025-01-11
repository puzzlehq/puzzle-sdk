import { createContext, useContext } from 'react';
import { QueryProvider } from './queryProvider.js';
import { ConnectionProvider } from './connectionProvider.js';

type PuzzleWalletProviderProps = {
  children: React.ReactNode;
  debugQuery?: boolean;
};

const ConnectionContext = createContext<boolean | undefined>(undefined);

export const PuzzleWalletProvider = ({
  children,
  debugQuery = false,
}: PuzzleWalletProviderProps) => {

  return (
    <QueryProvider debugQuery={debugQuery}>
      <ConnectionProvider>
      {children}
      </ConnectionProvider>
    </QueryProvider>
  );
};

export const useIsConnected = () => {
  const isConnected = useContext(ConnectionContext);
  return isConnected;
};
