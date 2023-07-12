import { useEffect } from 'react';
import { PuzzleAccount, projectId } from '../index.js';
import useClientWalletStore from './clientWalletStore.js';
import { ISignClient, SessionTypes } from '@walletconnect/types';
import { SignClient } from '@walletconnect/sign-client';

export const usePuzzleWallet = () => {
  const [setSession, setAccount, setAccounts, session] = useClientWalletStore(
    (state) => [state.setSession, state.setAccount, state.setAccounts, state.session]
  );

  const addSession = async (session: SessionTypes.Struct) => {
    console.log("Adding new session"); 
    setSession(session);

    const accounts = session.namespaces.aleo.accounts.map((account) => {
      const split = account.split(':');
      return {
        network: split[0],
        chainId: split[1],
        address: split[2],
      } as PuzzleAccount;
    });
    setAccounts(accounts ?? []);
    accounts[0] && setAccount(accounts[0]);
  };

  return { addSession, session };
};

export const useInitPuzzleWallet = () => {
  const { addSession } = usePuzzleWallet();
  const [signClient, setSignClient] = useClientWalletStore((state) => [
    state.signClient,
    state.setSignClient,
  ]);

  useEffect(() => {
    (async () => {
      const signClient: ISignClient = await SignClient.init({ projectId });
      setSignClient(signClient);
      const lastKeyIndex = signClient.session.getAll().length - 1;
      const lastSession =
        lastKeyIndex >= 0
          ? signClient.session.getAll()[lastKeyIndex]
          : undefined;

      if (lastSession) {
        addSession(lastSession);
      }
    })();
  }, []);

  useEffect(() => {
    if (!signClient) return;
    signClient.events.on('session_delete', ({ id, topic }) => {
      console.log('session deleted! topic: ', topic);
    });
  }, [signClient]);
};
