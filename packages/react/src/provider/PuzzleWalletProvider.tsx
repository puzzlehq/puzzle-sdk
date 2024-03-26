import { createContext, useContext, useEffect, useState } from 'react';
import { configureConnection } from '@puzzlehq/sdk-core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import EventEmitter from 'events';
import { useWalletStore } from '../store.js';
import { SessionTypes } from '@walletconnect/types';
import { useSession } from '../hooks/wc/useSession.js';

type PuzzleWalletProviderProps = {
  dAppName: string;
  dAppDescription: string;
  dAppUrl?: string;
  dAppIconURL: string;
  children: React.ReactNode;
  debugQuery?: boolean;
};

export const queryClient = new QueryClient();
const SessionContext = createContext<SessionTypes.Struct | undefined>(
  undefined,
);

export const PuzzleWalletProvider = ({
  dAppName,
  dAppDescription,
  dAppUrl,
  dAppIconURL,
  children,
  debugQuery = false,
}: PuzzleWalletProviderProps) => {
  const [session, setSession] = useState<SessionTypes.Struct | undefined>(
    undefined,
  );

  const _session = useSession();

  useEffect(() => {
    setSession(_session);
  }, [_session]);

  useEffect(() => {
    configureConnection({
      dAppName,
      dAppDescription,
      dAppUrl,
      dAppIconURL,
      onDisconnect: useWalletStore.getState().onDisconnect,
    });
    EventEmitter.defaultMaxListeners = 100;
  }, []);

  return (
    <SessionContext.Provider value={session}>
      <QueryClientProvider client={queryClient}>
        {debugQuery && <ReactQueryDevtools initialIsOpen={false} />}
        {children}
      </QueryClientProvider>
    </SessionContext.Provider>
  );
};

// Custom hook for accessing the session
export const useWalletSession = () => {
  const session = useContext(SessionContext);
  return session;
};
