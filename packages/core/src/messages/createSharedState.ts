import { SessionTypes } from '@walletconnect/types';
import { getWalletConnectModalSignClient } from '../client.js';
import { hasInjectedConnection } from '../utils/clientInfo.js';

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

    const query = {
      topic: session.topic,
      chainId: 'aleo:1',
      request: {
        jsonrpc: '2.0',
        method: 'createSharedState',
        params: {},
      },
    };

    if (hasInjectedConnection()) {
      try {
        const response: CreateSharedStateResponse =
          await window.aleo.puzzleWalletClient.createSharedState.mutation(
            query,
          );
        return response;
      } catch (e) {
        console.error('createSharedState error', e);
        const error = (e as Error).message;
        return { error };
      }
    }

    try {
      const response: CreateSharedStateResponse =
        await connection.request(query);
      return response;
    } catch (e) {
      console.error('createSharedState error', e);
      const error = (e as Error).message;
      return { error };
    }
  };
