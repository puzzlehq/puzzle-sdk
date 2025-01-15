import { QueryProvider } from './queryProvider.js';
import { ConnectionProvider, useIsConnected } from './connectionProvider.js';
import { SubscriptionProvider } from './subscriptionProvider.js';

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
        <SubscriptionProvider>{children}</SubscriptionProvider>
      </ConnectionProvider>
    </QueryProvider>
  );
};

export { useIsConnected };
