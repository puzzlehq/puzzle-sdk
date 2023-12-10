import { SessionTypes } from '@walletconnect/types';
import { getWalletConnectModalSignClient } from '../client.js';

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

export const getBalance = async ({address}: {address?: string}): Promise<GetBalancesResponse> => {
  const connection = await getWalletConnectModalSignClient();
  const session: SessionTypes.Struct | undefined =
    await connection.getSession();
  const chainId = 'aleo:1';

  if (!session || !chainId || !connection) {
    return { error: 'no session, chainId, or connection' };
  }

  try {
    const response: GetBalancesResponse = await connection.request({
      topic: session?.topic,
      chainId: chainId,
      request: {
          jsonrpc: '2.0',
        method: 'getBalance',
        params: {
          assetId: undefined,
          address,
        } as GetBalancesRequest,
      },
    });
    return response;
  } catch (e) {
    const error = (e as Error).message;
    console.error('getBalance error', error);
    return { error };
  }
};
