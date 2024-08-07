import { useEffect } from 'react';
import { hasInjectedConnection, } from '@puzzlehq/sdk-core';
const useInjectedSubscriptions = ({ session, configs, }) => {
    useEffect(() => {
        if (!hasInjectedConnection() || !session) {
            return;
        }
        const subscriptions = configs.map(({ subscriptionName, condition, onData }) => {
            const subscription = window.aleo.puzzleWalletClient[subscriptionName].subscribe({ sessionTopic: session.topic }, {
                onData(data) {
                    if (condition(data)) {
                        onData(data);
                    }
                },
                onError(err) {
                    console.error(`${subscriptionName} tRPC subscription error:`, err);
                },
            });
            return subscription;
        });
        // Cleanup on unmount or when dependencies change
        return () => {
            subscriptions.forEach((subscription) => {
                subscription.unsubscribe();
            });
        };
    }, [session?.topic, ...configs.flatMap((config) => config.dependencies)]);
};
export default useInjectedSubscriptions;
