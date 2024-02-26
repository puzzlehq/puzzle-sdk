import { useEffect } from "react"
import { configureConnection } from "@puzzlehq/sdk-core"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import EventEmitter from "events";
import useWalletStore from "../store.js";

type PuzzleWalletProviderProps = {
  dAppName: string;
  dAppDescription: string,
  dAppUrl: string,
  dAppIconURL: string,
  children: React.ReactNode,
  debugQuery?: boolean
}

export const queryClient = new QueryClient();

export const PuzzleWalletProvider = ({ dAppName, dAppDescription, dAppUrl, dAppIconURL, children, debugQuery = false }: PuzzleWalletProviderProps) => {
  useEffect(() => {
    configureConnection({
      dAppName,
      dAppDescription,
      dAppUrl,
      dAppIconURL,
      onDisconnect: useWalletStore.getState().onDisconnect()
    });
    EventEmitter.defaultMaxListeners = 100;
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {debugQuery && <ReactQueryDevtools initialIsOpen={false} />}
      {children}
    </QueryClientProvider>
  )
}