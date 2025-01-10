import { createContext, useContext } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/query-core';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useInjectedRequestQuery } from '../hooks/utils/useRequest.js';

type PuzzleWalletProviderProps = {
  children: React.ReactNode;
  debugQuery?: boolean;
};

export const queryClient = new QueryClient();
const ConnectionContext = createContext<boolean | undefined>(undefined);

export const PuzzleWalletProvider = ({
  children,
  debugQuery = false,
}: PuzzleWalletProviderProps) => {

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
      <QueryClientProvider client={queryClient}>
        {debugQuery && <ReactQueryDevtools initialIsOpen={false} />}
        {children}
      </QueryClientProvider>
    </ConnectionContext.Provider>
  );
};

export const useIsConnected = () => {
  const isConnected = useContext(ConnectionContext);
  return isConnected;
};
