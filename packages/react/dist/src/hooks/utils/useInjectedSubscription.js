import { useEffect } from 'react';
import { hasInjectedConnection, } from '@puzzlehq/sdk-core';
const useInjectedSubscriptions = ({ configs, }) => {
    useEffect(() => {
        if (!hasInjectedConnection()) {
            return;
        }
        const subscriptions = configs.map(({ subscriptionName, condition, onData }) => {
            const subscription = window.aleo.puzzleWalletClient[subscriptionName].subscribe({
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
    }, [...configs.flatMap((config) => config.dependencies)]);
};
export default useInjectedSubscriptions;
