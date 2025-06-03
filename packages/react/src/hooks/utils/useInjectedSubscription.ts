import { useEffect } from 'react';
import {
  AccountSelectedResponse,
  AccountSyncedResponse,
  hasInjectedConnection,
} from '@puzzlehq/sdk-core';
import { useIsConnected } from '../../provider/connectionProvider.js';

type SubscriptionConfig = {
  subscriptionName: string;
  condition: (
    data: AccountSelectedResponse | AccountSyncedResponse | void,
  ) => boolean;
  onData: (
    data: AccountSelectedResponse | AccountSyncedResponse | void,
  ) => void;
  onError: (error: Error) => void;
  dependencies: any[];
};

type UseInjectedSubscriptionsParams = {
  configs: SubscriptionConfig[];
};

const useInjectedSubscriptions = ({
  configs,
}: UseInjectedSubscriptionsParams) => {
  const { isConnected } = useIsConnected();

  useEffect(() => {
    if (!hasInjectedConnection()) {
      return;
    }
    const subscriptions = configs.map(
      ({ subscriptionName, condition, onData: _onData, onError: _onError }) => {
        try {
          const subscription = window.aleo.puzzleWalletClient[
            subscriptionName
          ].subscribe(
            { method: subscriptionName },
            {
              onData(
                data: AccountSelectedResponse | AccountSyncedResponse | void,
              ) {
                if (condition(data)) {
                  _onData(data);
                }
              },
              onError(e: Error) {
                if (isConnected) {
                  console.error(
                    `${subscriptionName} tRPC subscription error:`,
                    e,
                  );
                  _onError(e);
                }
              },
            },
          );
          return subscription;
        } catch (e) {
          isConnected && console.error(e);
        }
      },
    );

    // Cleanup on unmount or when dependencies change
    return () => {
      subscriptions.forEach((subscription) => {
        subscription?.unsubscribe();
      });
    };
  }, [...configs.flatMap((config) => config.dependencies), isConnected]);
};

export default useInjectedSubscriptions;
