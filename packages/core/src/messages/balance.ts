import { SessionTypes } from '@walletconnect/types';
import { getWalletConnectModalSignClient } from '../client.js';
import { hasInjectedConnection } from '../utils/clientInfo.js';
import { wc_aleo_chains } from '../data/walletconnect.js';
import { Balance } from '@puzzlehq/types';

export type GetBalancesRequest = {
  address?: string;
};

export type GetBalancesResponse = {
  balances?: Balance[];
  error?: string;
};

export const getBalance = async ({
  address,
  network,
}: {
  address?: string;
  network?: string;
}): Promise<GetBalancesResponse> => {
  const connection = await getWalletConnectModalSignClient();
  const session: SessionTypes.Struct | undefined =
    await connection.getSession();

  if (!session || !connection) {
    return { error: 'no session or connection' };
  }

  if (network && !wc_aleo_chains.includes(network)) {
    return { error: 'network not in wc_aleo_chains' };
  }

  const query = {
    topic: session.topic,
    chainId: network ?? 'aleo:1',
    request: {
      jsonrpc: '2.0',
      method: 'getBalance',
      params: {
        address,
      } as GetBalancesRequest,
    },
  };

  if (hasInjectedConnection()) {
    try {
      const response: GetBalancesResponse =
        await window.aleo.puzzleWalletClient.getBalance.query(query);
      return response;
    } catch (e) {
      const error = (e as Error).message;
      console.error('getBalance error', e);
      return { error };
    }
  }

  try {
    const response: GetBalancesResponse = await connection.request(query);
    return response;
  } catch (e) {
    const error = (e as Error).message;
    console.error('getBalance error', e);
    return { error };
  }
};
