import { getWalletConnectModalSignClient } from '../client.js'
import { useState } from 'react'
import { disconnect as _disconnect, emitter, useSession } from '../index.js';
import useWalletStore from '../store.js';
import { SessionTypes } from '@walletconnect/types';
import { getSdkError } from '@walletconnect/utils';

export function useDisconnect() {
  const session: SessionTypes.Struct | undefined = useSession();

  const [error, setError] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);

  async function disconnect() {
    try {
      setLoading(true);
      setError(undefined);

      const client = await getWalletConnectModalSignClient();
      await client.disconnect({
        topic: session?.topic,
        reason: getSdkError('USER_DISCONNECTED')
      });

      emitter.emit('session_change');
      useWalletStore.setState({ account: undefined });
    } catch (err) {
      setError(err)
      throw err
    } finally {
      setLoading(false)
    }
  }

  return { error, loading, disconnect }
}