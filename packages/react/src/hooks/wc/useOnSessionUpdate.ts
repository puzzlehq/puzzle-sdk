import type { WalletConnectModalEventCallback } from '@puzzlehq/walletconnect-modal-sign-html';
import { useEffect } from 'react';
import { getWalletConnectModalSignClient } from '@puzzlehq/sdk-core';

export function useOnSessionUpdate(callback: WalletConnectModalEventCallback) {
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
