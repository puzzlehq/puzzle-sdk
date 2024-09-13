import { SessionTypes } from '@walletconnect/types';
import { getWalletConnectModalSignClient } from '../client.js';
import { Network } from '@puzzlehq/types';
import { networkToChainId, wc_aleo_chains } from '../data/walletconnect.js';

export type NetworkSwitchRequest = {
  network: Network;
};

export type NetworkSwitchResponse = {
  network?: Network;
  error?: string;
};

export const requestNetworkSwitch = async ({
  network,
}: NetworkSwitchRequest): Promise<NetworkSwitchResponse> => {
  const connection = await getWalletConnectModalSignClient();

  const session: SessionTypes.Struct | undefined =
    await connection?.getSession();
  
  if (!session || !connection) {
    return { error: 'no session or connection' };
  }

  if (!wc_aleo_chains.includes(networkToChainId(network))) {
    return { error: `invalid network to switch to: ${network}` };
  }

  if (!session.namespaces.aleo?.chains?.includes(networkToChainId(network))) {
    return { error: `dApp does not have permission to switch to ${network}` };
  }

  try {
    const response: NetworkSwitchResponse = await connection.request({
      topic: session.topic,
      chainId: networkToChainId(network) ?? 'aleo:0',
      request: {
        jsonrpc: '2.0',
        method: 'requestNetworkSwitch',
        params: {
          network,
        } as NetworkSwitchRequest,
      },
    });
    return response;
  } catch (e) {
    console.error('network switch error', e);
    const error = (e as Error).message;
    return { error };
  }
};
