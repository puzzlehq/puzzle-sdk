import { useSession, useDisconnect as useWalletDisconnect } from '@walletconnect/modal-sign-react';
import { getSdkError } from '@walletconnect/utils';
import { SessionTypes } from '@walletconnect/types';
import { useEffect, useState } from 'react';

export const useDisconnect = () => {
  const session: SessionTypes.Struct = useSession();
  const [error, setError] = useState<string | undefined>(undefined);

  const {disconnect: wc_disconnect, error: wc_error, loading} = useWalletDisconnect({
    topic: session.topic,
    reason: getSdkError('USER_DISCONNECTED'),
  });

  const disconnect = async () => {
    try {
      await wc_disconnect();
      setError(undefined);
    } catch (e) {}
  }

  useEffect(() => {
    if (wc_error) {
      setError(wc_error.message);
    }
  }, [wc_error])
  
  return { disconnect, error, loading };
};
