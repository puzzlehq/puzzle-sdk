import { useEffect } from 'react';
import { PuzzleAccount, shortenAddress } from '../index.js';
import useClientWalletStore from './clientWalletStore.js';
import { SessionTypes } from '@walletconnect/types';
import { useOnSessionDelete, useSession } from '@walletconnect/modal-sign-react';
import { log_sdk } from '../utils/logger.js';

export const useInitWallet = () => {
  const session: SessionTypes.Struct | undefined = useSession();
  const [setAccount, setAccounts, disconnect] = useClientWalletStore((state) => [
    state.setAccount, state.setAccounts, state.disconnect
  ]);

  useEffect(() => {
    if (session) {
      window.localStorage.removeItem('WALLETCONNECT_DEEPLINK_CHOICE'); // remove to prevent walletconnect from redirecting to the wallet page
      const accounts = session.namespaces.aleo.accounts.map((account) => {
        const split = account.split(':');
        return {
          network: split[0],
          chainId: split[1],
          address: split[2],
          shortenedAddress: shortenAddress(split[2])
        } as PuzzleAccount;
      });
      setAccounts(accounts ?? []);
      accounts[0] && setAccount(accounts[0]);
    }  
  }, [session?.topic])

  useOnSessionDelete(({ id, topic }) => {
    log_sdk('session deleted! topic: ', topic);
    disconnect();
  })
};
