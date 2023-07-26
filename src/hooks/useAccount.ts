import { useEffect, useState } from 'react';
import useClientWalletStore from './clientWalletStore.js';
import { useRequest } from '@walletconnect/modal-sign-react';
import { GetSelectedAccountMessage, GetSelectedAccountResMessage } from '../messaging/account.js';

export const useAccount = () => {
  const [account, accounts, session, signClient, chainId, setAccount] =
    useClientWalletStore((state) => [
      state.account,
      state.accounts,
      state.session,
      state.signClient,
      state.chainId,
      state.setAccount,
    ]);
    const [error, setError] = useState<string | undefined>(undefined)
  
    const { request, data: wc_data, error: wc_error, loading } = useRequest({
      topic: session?.topic,
      chainId: chainId ?? 'aleo:1',
      request: {
        id: 1,
        jsonrpc: '2.0',
        method: 'aleo_getSelectedAccount',
        params: {
          type: 'GET_SELECTED_ACCOUNT',
        } as GetSelectedAccountMessage
      },
    });

  // listen for wallet-originated account updates
  useEffect(() => {
    if (!signClient || !session) return;
    let currentSession = session;
    signClient.events.on('session_event', ({ id, params, topic }) => {
      if (topic !== currentSession?.topic) return;
      const eventName = params.event.name;
      if (eventName === 'accountsChanged') {
        const address = params.event.data[0];
        const network = params.chainId.split(':')[0];
        const chainId = params.chainId.split(':')[1];
        setAccount({
          network,
          chainId,
          address,
        });
        setError(undefined);
      }
    });
  }, [session, signClient]);

  // send initial account request...
  useEffect(() => {
    if (session) {
      request();
    }
  }, [session])

  // ...and listen for response
  useEffect(() => { 
    if (wc_error) {
      setError(wc_error.message);
    } else if (wc_data) {
      const puzzleData: GetSelectedAccountResMessage | undefined = wc_data && wc_data.type === 'GET_SELECTED_ACCOUNT_RES' ? wc_data : undefined;
      const error: string | undefined = wc_data && wc_data.type === 'GET_SELECTED_ACCOUNT_RES' ? wc_data.data.error : undefined;
      const account = puzzleData?.data.account;
      if (account) {
        setAccount(account);
      }
      setError(error);
    }
  }, [wc_data, wc_error]);

  return {
    account,
    accounts,
    isConnected: !!account,
    session,
    error,
    loading
  };
};
