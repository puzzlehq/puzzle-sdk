import { useEffect } from "react"
import { configureConnection } from "../index.js"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import EventEmitter from "events";

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
      dAppIconURL
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