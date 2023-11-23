import type { WalletConnectModalSignRequestArguments } from '@walletconnect/modal-sign-html'
import { getWalletConnectModalSignClient } from '../../client.js'
import { useState } from 'react'

export function useRequest<Result>(params: WalletConnectModalSignRequestArguments) {
  const [data, setData] = useState<any | undefined>(undefined)
  const [error, setError] = useState<unknown | undefined>(undefined)
  const [loading, setLoading] = useState(false)

  async function request(paramsOverride?: WalletConnectModalSignRequestArguments) {
    try {
      setLoading(true)
      setError(undefined)
      const client = await getWalletConnectModalSignClient()
      const response = await client.request<Result>(paramsOverride ?? params)
      setData(response)

      return response
    } catch (err) {
      setError(err)
      throw err
    } finally {
      setLoading(false)
    }
  }

  return { data, error, loading, request }
}