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

  const query = {
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
    try {
      const response: ImportSharedStateResponse =
        await window.aleo.puzzleWalletClient.importSharedState.mutation(query);
      return response;
    } catch (e) {
      console.error('importSharedState error', e);
      const error = (e as Error).message;
      return { error };
    }
  }

  try {
    const response: ImportSharedStateResponse = await connection.request(query);
    return response;
  } catch (e) {
    console.error('importSharedState error', e);
    const error = (e as Error).message;
    return { error };
  }
};
