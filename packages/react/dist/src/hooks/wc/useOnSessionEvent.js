import { useEffect } from 'react';
import { getWalletConnectModalSignClient } from '@puzzlehq/sdk-core';
export function useOnSessionEvent(callback) {
    useEffect(() => {
        getWalletConnectModalSignClient().then((client) => {
            client.onSessionEvent(callback);
        });
        return () => {
            getWalletConnectModalSignClient().then((client) => {
                client.offSessionEvent(callback);
            });
        };
    }, [callback]);
}
