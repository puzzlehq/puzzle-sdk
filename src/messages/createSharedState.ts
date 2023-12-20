import { SessionTypes } from '@walletconnect/types';
import { getWalletConnectModalSignClient } from '../client.js';

export type CreateSharedStateResponse = {
  data?: {
    seed: string;
    address: string;
  };
  error?: string;
};

export const createSharedState =
  async (): Promise<CreateSharedStateResponse> => {
    const connection = await getWalletConnectModalSignClient();
    const session: SessionTypes.Struct | undefined =
      await connection?.getSession();

    if (!session || !connection) {
      return { error: 'no session or connection' };
    }

    try {
      const response: CreateSharedStateResponse = await connection.request({
        topic: session.topic,
        chainId: 'aleo:1',
        request: {
              jsonrpc: '2.0',
          method: 'createSharedState',
          params: {},
        },
      });
      return response;
    } catch (e) {
      const error = (e as Error).message;
      console.error('createSharedState error', error);
      return { error };
    }
  };
