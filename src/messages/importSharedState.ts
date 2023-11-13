import { SessionTypes } from '@walletconnect/types';
import { getWalletConnectModalSignClient } from '../client.js';

export type ImportSharedStateRequest = {
  seed: string;
};

export type ImportSharedStateResponse = {
  data?: {
    address: string,
    seed: string,
    viewKey: string,
  },
  error?: string;
};

export const importSharedState = async (
  seed: string
): Promise<ImportSharedStateResponse> => {
  const connection = await getWalletConnectModalSignClient();

  const session: SessionTypes.Struct | undefined =
    await connection?.getSession();
  const chainId = 'aleo:1';

  if (!session || !chainId || !connection) {
    return { error: 'no session, chainId, or connection' };
  }

  try {
    const response: ImportSharedStateResponse = await connection.request({
      topic: session?.topic ?? '',
      chainId: chainId,
      request: {
        id: 1,
        jsonrpc: '2.0',
        method: 'importSharedState',
        params: {
          seed,
        } as ImportSharedStateRequest,
      },
    });
    return response;
  } catch (e) {
    const error = (e as Error).message;
    console.error('importSharedState error', error);
    return { error };
  }
};
