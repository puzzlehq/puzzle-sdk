import type { WalletConnectModalEventCallback } from '@walletconnect/modal-sign-html';
import { useEffect } from 'react';
import { getWalletConnectModalSignClient } from '@puzzlehq/sdk-core';

export function useOnSessionExpire(callback: WalletConnectModalEventCallback) {
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
