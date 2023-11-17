import { getWalletConnectModalSignClient } from '../client.js'
import { useState } from 'react'
import { disconnect as _disconnect, emitter } from '../index.js';

export function useDisconnect() {
  const [error, setError] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);

  async function disconnect() {
    try {
      setLoading(true)
      setError(undefined)
      const client = await getWalletConnectModalSignClient();
      await client.disconnect();
      emitter.emit('session_change')
    } catch (err) {
      setError(err)
      throw err
    } finally {
      setLoading(false)
    }
  }

  return { error, loading, disconnect }
}