import { PuzzleAccount } from '../data/types.js';
import { getWalletConnectModalSignClient } from '../client.js';
import { SessionTypes } from '@walletconnect/types';
import { hasInjectedConnection } from '../utils/clientInfo.js';

export type GetSelectedAccountResponse = {
  account?: PuzzleAccount;
  error?: string;
};

export const getAccount = async (): Promise<GetSelectedAccountResponse> => {
  const connection = await getWalletConnectModalSignClient();
  const session: SessionTypes.Struct | undefined =
    await connection.getSession();

  if (!session || !connection) {
    return { error: 'no session or connection' };
  }

  const query = {
    topic: session.topic,
    chainId: 'aleo:1',
    request: {
      jsonrpc: '2.0',
      method: 'getSelectedAccount',
    },
  };

  if (hasInjectedConnection()) {
    try {
      const response: GetSelectedAccountResponse =
        await window.aleo.puzzleWalletClient.getSelectedAccount.query(query);
      return response;
    } catch (e) {
      console.error('getAccount error', e);
      return { error: (e as Error).message };
    }
  }

  try {
    const response: GetSelectedAccountResponse =
      await connection.request(query);
    return response;
  } catch (e) {
    console.error('getAccount error', e);
    const error = (e as Error).message;
    return { error };
  }
};
