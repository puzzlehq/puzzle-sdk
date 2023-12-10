import { useEffect } from "react"
import { configureConnection } from "../index.js"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

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
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}