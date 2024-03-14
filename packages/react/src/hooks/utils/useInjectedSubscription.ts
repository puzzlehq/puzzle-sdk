import { useEffect } from 'react';
import { SessionTypes } from '@walletconnect/types';
import {
  AccountSelectedResponse,
  AccountSyncedResponse,
  hasInjectedConnection,
} from '@puzzlehq/sdk-core';

type SubscriptionConfig = {
  subscriptionName: string;
  condition: (data: AccountSelectedResponse) => boolean;
  onData: (data: AccountSelectedResponse) => void;
};

type UseInjectedSubscriptionsParams = {
  session: SessionTypes.Struct | undefined;
  configs: SubscriptionConfig[];
};

const useInjectedSubscriptions = ({
  session,
  configs,
}: UseInjectedSubscriptionsParams) => {
  useEffect(() => {
    if (!hasInjectedConnection() || !session) {
      return;
    }
    const subscriptions = configs.map(
      ({ subscriptionName, condition, onData }) => {
        const subscription = window.aleo.puzzleWalletClient[
          subscriptionName
        ].subscribe(
          { sessionTopic: session.topic },
          {
            onData(data: AccountSelectedResponse | AccountSyncedResponse) {
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
      subscriptions.forEach((subscription) => subscription.unsubscribe());
    };
  }, [session?.topic, configs]);
};

export default useInjectedSubscriptions;
