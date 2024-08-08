import { useEffect } from 'react';
import { getWalletConnectModalSignClient } from '@puzzlehq/sdk-core';
export function useOnSessionExpire(callback) {
    useEffect(() => {
        getWalletConnectModalSignClient().then((client) => {
            client.onSessionExpire(callback);
        });
        return () => {
            getWalletConnectModalSignClient().then((client) => {
                client.offSessionExpire(callback);
            });
        };
    }, [callback]);
}
