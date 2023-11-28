import { PuzzleAccount } from '../index.js';
import { getWalletConnectModalSignClient } from '../client.js';
import { SessionTypes } from '@walletconnect/types';
import useWalletStore from '../store.js';

export type GetSelectedAccountResponse = {
  account?: PuzzleAccount;
  error?: string;
};

export const getAccount = async (): Promise<GetSelectedAccountResponse> => {
  const connection = await getWalletConnectModalSignClient();
  const session: SessionTypes.Struct | undefined =
    await connection.getSession();
  const chainId = 'aleo:1';

  if (!session || !chainId || !connection) {
    return { error: 'no session, chainId, or connection' };
  }

  try {
    const response: GetSelectedAccountResponse = await connection.request({
      topic: session?.topic,
      chainId: chainId,
      request: {
          jsonrpc: '2.0',
        method: 'getSelectedAccount',
      },
    });
    useWalletStore.setState({ account: response.account });
    return response;
  } catch (e) {
    const error = (e as Error).message;
    console.error('getAccount error', error);
    return { error };
  }
};
