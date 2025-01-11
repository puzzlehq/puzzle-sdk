import { useEffect } from 'react';
import { hasInjectedConnection, } from '@puzzlehq/sdk-core';
const useInjectedSubscriptions = ({ configs, }) => {
    useEffect(() => {
        if (!hasInjectedConnection()) {
            return;
        }
        const subscriptions = configs.map(({ subscriptionName, condition, onData: _onData, onError: _onError }) => {
            console.log(`subscribing to ${subscriptionName}`);
            try {
                const subscription = (window.aleo.puzzleWalletClient[subscriptionName]).subscribe({ method: subscriptionName }, {
                    next(data) {
                        if (condition(data)) {
                            _onData(data);
                        }
                    },
                    error(e) {
                        console.error(`${subscriptionName} tRPC subscription error:`, e);
                        _onError(e);
                    },
                });
                return subscription;
            }
            catch (e) {
                console.error(e);
            }
        });
        // Cleanup on unmount or when dependencies change
        return () => {
            subscriptions.forEach((subscription) => {
                subscription?.unsubscribe();
            });
        };
    }, [...configs.flatMap((config) => config.dependencies)]);
};
export default useInjectedSubscriptions;
