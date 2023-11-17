import { emitter, getWalletConnectModalSignClient } from '../client.js'
import { SessionTypes } from '@walletconnect/types'
import { useState } from 'react'
import { wc_aleo_chains, wc_aleo_methods, wc_events } from '../data/walletconnect.js'

export function useConnect() {
  // const { data, error, loading, setData, setError, setLoading } = useAsyncAction<Data>()
  const [data, setData] = useState<SessionTypes.Struct | undefined>(undefined);
  const [error, setError] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);

  async function connect() {
    try {
      setLoading(true)
      setError(undefined)
      const client = await getWalletConnectModalSignClient()
      const response = await client.connect({
        requiredNamespaces: {
          aleo: {
            methods: wc_aleo_methods,
            chains: wc_aleo_chains,
            events: wc_events,
          },
        },
      })
      setData(response)
      emitter.emit('session_change')
      window.localStorage.removeItem('WALLETCONNECT_DEEPLINK_CHOICE');

      return response
    } catch (err) {
      setError(err)
      throw err
    } finally {
      setLoading(false)
    }
  }

  return { data, error, loading, connect }
}