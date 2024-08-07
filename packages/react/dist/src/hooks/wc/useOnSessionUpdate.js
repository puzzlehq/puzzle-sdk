import { useEffect } from 'react';
import { getWalletConnectModalSignClient } from '@puzzlehq/sdk-core';
export function useOnSessionUpdate(callback) {
    useEffect(() => {
        getWalletConnectModalSignClient().then((client) => {
            client.onSessionUpdate(callback);
        });
        return () => {
            getWalletConnectModalSignClient().then((client) => {
                client.offSessionUpdate(callback);
            });
        };
    }, [callback]);
}
