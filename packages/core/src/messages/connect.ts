import {
  networkToChainId,
  wc_aleo_methods,
  wc_events,
} from '../data/walletconnect.js';
import { getWalletConnectModalSignClient, emitter } from '../client.js';
import { SessionTypes } from '@walletconnect/types';
import { checkForDesktopConnection } from '../utils/clientInfo.js';
import { Network } from '@puzzlehq/types';

export type ConnectProps = {
  networks: Network[],
  programIds: Record<Network, string[]>;
  showModal?: boolean
}

export const getAleoMethods = (networks: Network[], programIds: Record<Network, string[]>) => {
  const methods: string[] = wc_aleo_methods.slice();
  for (let network of Object.keys(programIds) as Network[]) {
    if (!networks.includes(network)) return;
    for (let programId of programIds[network]) {
      methods.push(`${network}:${programId}`)
    }
  }

  return methods;
}

export const getAleoChains = (networks: Network[]) => {
  return networks.map((network) => networkToChainId(network))
}

export const connect = async ({ programIds, networks, showModal }: ConnectProps) => {
  networks = Array.from(new Set(networks));
  const connection = await getWalletConnectModalSignClient();
  if (!connection) {
    throw new Error('call configureConnection() first!');
  }

  const existingSession: SessionTypes.Struct | undefined =
    await connection.getSession();
  if (existingSession) {
    console.log('Already connected!', existingSession);
    return existingSession;
  }

  try {
    const newSession: SessionTypes.Struct | undefined =
      await connection.connect(
        {
          requiredNamespaces: {
            aleo: {
              methods: getAleoMethods(networks, programIds),
              chains: getAleoChains(networks),
              events: wc_events,
            },
          },
        },
        showModal,
      );
    emitter.emit('session_change');

    if (newSession) {
      await checkForDesktopConnection(newSession.topic);
    }

    const choice = window.localStorage.getItem('WALLETCONNECT_DEEPLINK_CHOICE');
    if (choice && JSON.parse(choice).name !== 'Android') {
      // remove to prevent walletconnect from redirecting to the wallet page
      window.localStorage.removeItem('WALLETCONNECT_DEEPLINK_CHOICE');
    }
    return newSession;
  } catch (e) {
    console.error('connect error', e);
  }
};
