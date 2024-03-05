import { SessionTypes } from '@walletconnect/types';
import { getWalletConnectModalSignClient } from '../client.js';
import { hasDesktopConnection } from '../utils/clientInfo.js';

export type GetBalancesRequest = {
  assetId?: string;
  address?: string;
};

export type Balance = {
  private: number;
  public: number;
};

export type GetBalancesResponse = {
  balances?: Balance[]; // [ALEO, PIECES];
  error?: string;
};

export const getBalance = async ({
  address,
}: {
  address?: string;
}): Promise<GetBalancesResponse> => {
  const connection = await getWalletConnectModalSignClient();
  const session: SessionTypes.Struct | undefined =
    await connection.getSession();

  if (!session || !connection) {
    return { error: 'no session or connection' };
  }

  const query = {
    topic: session.topic,
    chainId: 'aleo:3',
    request: {
      jsonrpc: '2.0',
      method: 'getBalance',
      params: {
        assetId: undefined,
        address,
      } as GetBalancesRequest,
    },
  };

  if (hasDesktopConnection()) {
    console.log('getBalance: test 1');
    try {
      const response: GetBalancesResponse =
        await window.aleo.puzzleWalletClient.getBalance.query(query);
      console.log('getBalance: test 2 response', response);
      return response;
    } catch (e) {
      const error = (e as Error).message;
      console.error('getBalance error', error);
      return { error };
    }
  }

  try {
    const response: GetBalancesResponse = await connection.request(query);
    return response;
  } catch (e) {
    const error = (e as Error).message;
    console.error('getBalance error', error);
    return { error };
  }
};
