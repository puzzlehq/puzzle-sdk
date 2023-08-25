import { useSession, useDisconnect as useWalletDisconnect } from '@walletconnect/modal-sign-react';
import { getSdkError } from '@walletconnect/utils';
import { SessionTypes } from '@walletconnect/types';
import useClientWalletStore from './clientWalletStore.js';

export const useDisconnect = () => {
  const session: SessionTypes.Struct | undefined = useSession();
  const [disconnect_store] = useClientWalletStore((state) => [
    state.disconnect
  ]);

  const {disconnect: wc_disconnect, error: wc_error, loading} = useWalletDisconnect({
    topic: session?.topic,
    reason: getSdkError('USER_DISCONNECTED'),
  });

  const disconnect = async () => {
    if (session) {
      try {
        wc_disconnect();
      } catch (e) {
        console.log('could not disconnect session entirely')
      }
      disconnect_store();
    }
  }

  const error: string | undefined = wc_error ? wc_error.message : undefined;
  
  return { disconnect, error, loading };
};
