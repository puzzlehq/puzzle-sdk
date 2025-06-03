import useInjectedSubscriptions from '../hooks/utils/useInjectedSubscription.js';
import {
  AccountSelectedResponse,
  AccountSyncedResponse,
  shortenAddress
} from '@puzzlehq/sdk-core';
import { useIsConnected } from './connectionProvider.js';
import { useWalletStore } from '../store.js';

type Props = {
  children: React.ReactNode;
};

export const SubscriptionProvider = ({ children }: Props) => {
  const { isConnected, setIsConnected } = useIsConnected();
  const [onDisconnect, setAccount] = useWalletStore(
    (state) => [state.onDisconnect, state.setAccount],
  );

  useInjectedSubscriptions({
    configs: [
      {
        subscriptionName: 'onAccountSelected',
        condition: () => !!isConnected,
        onData: (data: AccountSelectedResponse) => {
          setAccount({
            network: data.network,
            address: data.address,
            shortenedAddress: shortenAddress(data.address),
          });
        },
        onError: (e: Error) => {
          console.error(e);
        },
        dependencies: [isConnected],
      },
      {
        subscriptionName: 'onSelectedAccountSynced',
        condition: () => !!isConnected,
        onData: (data: AccountSyncedResponse) => {
          setIsConnected(true);
          setAccount({
            network: data.network,
            address: data.address,
            shortenedAddress: shortenAddress(data.address),
          });
        },
        onError: (e: Error) => {
          console.error(e);
        },
        dependencies: [isConnected],
      },
      {
        subscriptionName: 'onDisconnect',
        condition: () => !!isConnected,
        onData: () => {
          console.log('Wallet-originated disconnect');
          onDisconnect();
          setIsConnected(false);
        },
        onError: (e: Error) => {
          console.error(e);
        },
        dependencies: [isConnected],
      },
    ],
  });

  return <>{children}</>;
};
