import { useEffect } from 'react';
import useClientWalletStore from './clientWalletStore.js';

export const usePuzzleAccount = () => {
  const [account, accounts, session, signClient, setAccount] =
    useClientWalletStore((state) => [
      state.account,
      state.accounts,
      state.session,
      state.signClient,
      state.setAccount,
    ]);

  useEffect(() => {
    if (!signClient) return;
    signClient.events.on('session_event', ({ id, params, topic }) => {
      if (topic !== session?.topic) return;
      const eventName = params.event.name;
      const address = params.event.data[0];
      const network = params.chainId.split(':')[0];
      const chainId = params.chainId.split(':')[1];
      if (eventName === 'accountsChanged') {
        setAccount({
          network,
          chainId,
          address,
        });
      }
    });
  }, [session, signClient]);

  return {
    account,
    accounts,
    isConnected: !!account,
  };
};
