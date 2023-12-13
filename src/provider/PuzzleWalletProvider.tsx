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
  children: React.ReactNode
}

export const queryClient = new QueryClient();

export const PuzzleWalletProvider = ({ dAppName, dAppDescription, dAppUrl, dAppIconURL, children }: PuzzleWalletProviderProps) => {
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
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      {children}
    </QueryClientProvider>
  )
}