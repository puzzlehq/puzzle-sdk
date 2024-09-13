import { SessionTypes } from '@walletconnect/types';
import { getWalletConnectModalSignClient } from '../client.js';
import { hasInjectedConnection } from '../utils/clientInfo.js';
import { networkToChainId, wc_aleo_chains } from '../data/walletconnect.js';
import { Network } from '@puzzlehq/types';

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
  network?: Network,
): Promise<ImportSharedStateResponse> => {
  const connection = await getWalletConnectModalSignClient();

  const session: SessionTypes.Struct | undefined =
    await connection?.getSession();

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
      method: 'importSharedState',
      params: {
        seed,
      } as ImportSharedStateRequest,
    },
  };

  if (hasInjectedConnection()) {
    try {
      const response: ImportSharedStateResponse =
        await window.aleo.puzzleWalletClient.importSharedState.mutate(query);
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
