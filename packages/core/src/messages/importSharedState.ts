import { SessionTypes } from '@walletconnect/types';
import { getWalletConnectModalSignClient } from '../client.js';
import { hasDesktopConnection } from '../utils/clientInfo.js';

export type ImportSharedStateRequest = {
  seed: string;
};

export type ImportSharedStateResponse = {
  data?: {
    address: string;
    seed: string;
  };
  error?: string;
};

export const importSharedState = async (
  seed: string,
): Promise<ImportSharedStateResponse> => {
  const connection = await getWalletConnectModalSignClient();

  const session: SessionTypes.Struct | undefined =
    await connection?.getSession();

  if (!session || !connection) {
    return { error: 'no session or connection' };
  }

  const mutation = {
    topic: session.topic,
    chainId: 'aleo:3',
    request: {
      jsonrpc: '2.0',
      method: 'importSharedState',
      params: {
        seed,
      } as ImportSharedStateRequest,
    },
  };

  if (hasDesktopConnection()) {
    console.log('importSharedState: test 1');
    try {
      const response: ImportSharedStateResponse =
        await window.aleo.puzzleWalletClient.importSharedState.mutation(
          mutation,
        );
      console.log('importSharedState: test 2', response);
      return response;
    } catch (e) {
      const error = (e as Error).message;
      console.error('importSharedState error', error);
      return { error };
    }
  }

  try {
    const response: ImportSharedStateResponse =
      await connection.request(mutation);
    return response;
  } catch (e) {
    const error = (e as Error).message;
    console.error('importSharedState error', error);
    return { error };
  }
};
