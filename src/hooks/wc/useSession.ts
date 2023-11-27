import { useEffect, useState } from 'react';
import { emitter, getWalletConnectModalSignClient } from '../../client.js';
import { useOnSessionDelete } from './useOnSessionDelete.js';
import { useOnSessionExpire } from './useOnSessionExpire.js';
import { useOnSessionUpdate } from './useOnSessionUpdate.js';
import { SessionTypes } from '@walletconnect/types';

export function useSession() {
  const [session, setSession] = useState<SessionTypes.Struct | undefined>(undefined);

  useOnSessionDelete((event) => {
    if (event.topic === session?.topic) {
      setSession(undefined);
    }
  });

  useOnSessionUpdate((event) => {
    if (session && event.topic === session?.topic) {
      const { namespaces } = event.params;
      const updatedSession = { ...session, namespaces };
      setSession(updatedSession);
    }
  });

  useOnSessionExpire((event) => {
    if (session && event.topic === session?.topic) {
      setSession(undefined);
    }
  });

  useEffect(() => {
    async function getActiveSession() {
      const client = await getWalletConnectModalSignClient();
      const response: SessionTypes.Struct = await client.getSession();
      
      setSession(response);
    }
    getActiveSession();

    // WORKAROUND: This needs to be replaced with new session_connect event
    emitter.on('session_change', getActiveSession);
  
    return () => {
      emitter.off('session_change', getActiveSession);
    };
  }, []);

  return session;
}
