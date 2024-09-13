import { PuzzleAccount } from '../data/types.js';
import { getWalletConnectModalSignClient } from '../client.js';
import { SessionTypes } from '@walletconnect/types';
import { hasInjectedConnection } from '../utils/clientInfo.js';
import { networkToChainId, wc_aleo_chains } from '../data/walletconnect.js';
import { Network } from '@puzzlehq/types';

export type GetSelectedAccountResponse = {
  account?: PuzzleAccount;
  error?: string;
};

export const getAccount = async (
  network?: Network,
): Promise<GetSelectedAccountResponse> => {
  const connection = await getWalletConnectModalSignClient();
  const session: SessionTypes.Struct | undefined =
    await connection.getSession();

  if (!session || !connection) {
    return { error: 'no session or connection' };
  }

  if (network && !wc_aleo_chains.includes(networkToChainId(network))) {
    return { error: 'network not in wc_aleo_chains' };
  }

  const query = {
    topic: session.topic,
    chainId: network ? networkToChainId(network) : 'aleo:0',
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
