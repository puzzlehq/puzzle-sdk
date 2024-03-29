import type { WalletConnectModalEventCallback } from '@walletconnect/modal-sign-html';
import { useEffect } from 'react';
import { getWalletConnectModalSignClient } from '@puzzlehq/sdk-core';

export function useOnSessionDelete(callback: WalletConnectModalEventCallback) {
  useEffect(() => {
    getWalletConnectModalSignClient().then((client) => {
      client.onSessionDelete(callback);
    });

    return () => {
      getWalletConnectModalSignClient().then((client) => {
        client.offSessionDelete(callback);
      });
    };
  }, [callback]);
}
