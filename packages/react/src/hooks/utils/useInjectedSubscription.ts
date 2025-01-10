import { useEffect } from 'react';
import {
  AccountSelectedResponse,
  AccountSyncedResponse,
  hasInjectedConnection,
} from '@puzzlehq/sdk-core';

type SubscriptionConfig = {
  subscriptionName: string;
  condition: (data: AccountSelectedResponse | AccountSyncedResponse | void) => boolean;
  onData: (data: AccountSelectedResponse | AccountSyncedResponse | void) => void;
  dependencies: any[];
};

type UseInjectedSubscriptionsParams = {
  configs: SubscriptionConfig[];
};

const useInjectedSubscriptions = ({
  configs,
}: UseInjectedSubscriptionsParams) => {
  useEffect(() => {
    if (!hasInjectedConnection()) {
      return;
    }
    const subscriptions = configs.map(
      ({ subscriptionName, condition, onData }) => {
        const subscription = window.aleo.puzzleWalletClient[
          subscriptionName
        ].subscribe(
          {
            onData(data: AccountSelectedResponse | AccountSyncedResponse | void) {
              if (condition(data)) {
                onData(data);
              }
            },
            onError(err: Error) {
              console.error(
                `${subscriptionName} tRPC subscription error:`,
                err,
              );
            },
          },
        );
        return subscription;
      },
    );

    // Cleanup on unmount or when dependencies change
    return () => {
      subscriptions.forEach((subscription) => {
        subscription.unsubscribe();
      });
    };
  }, [...configs.flatMap((config) => config.dependencies)]);
};

export default useInjectedSubscriptions;
