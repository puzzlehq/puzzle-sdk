import { getWalletConnectModalSignClient } from '../client.js'
import { useState } from 'react'
import { disconnect as _disconnect, emitter, useSession } from '../index.js';
import useWalletStore from '../store.js';
import { SessionTypes } from '@walletconnect/types';
import { getSdkError } from '@walletconnect/utils';
import { useAsyncAction } from './wc/_useAsyncAction.js';

export function useDisconnect() {
  const session: SessionTypes.Struct | undefined = useSession();

  const { error, loading, setError, setLoading } = useAsyncAction();

  async function disconnect() {
    if (!session || loading) return;
    try {
      setLoading(true);
      setError(undefined);

      const client = await getWalletConnectModalSignClient();
      await client.disconnect({
        topic: session.topic,
        reason: getSdkError('USER_DISCONNECTED')
      });

      emitter.emit('session_change');
      useWalletStore.setState({ account: undefined });
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }

  return { error, loading, disconnect }
}