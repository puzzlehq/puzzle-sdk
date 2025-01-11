import { QueryProvider } from './queryProvider.js';
import { ConnectionProvider, useIsConnected } from './connectionProvider.js';

type PuzzleWalletProviderProps = {
  children: React.ReactNode;
  debugQuery?: boolean;
};

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

export { useIsConnected }; 