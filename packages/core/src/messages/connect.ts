import {
  networkToChainId,
  wc_aleo_methods,
  wc_events,
} from '../data/walletconnect.js';
import { getWalletConnectModalSignClient, emitter } from '../client.js';
import { SessionTypes } from '@walletconnect/types';
import { checkForDesktopConnection } from '../utils/clientInfo.js';
import { Network } from '@puzzlehq/types';

type ProgramIds = Partial<Record<Network, string[]>>;

export type ConnectProps = {
  programIds: ProgramIds,
  showModal?: boolean
}

export const isWcProgramId = (method: string) => {
  if (/^(AleoTestnet|AleoMainnet):ALL_PROGRAM_IDS/.test(method)) return true;
  return /^(AleoTestnet|AleoMainnet):[a-zA-Z0-9-_]+\.aleo$/.test(method);
}

export const getAleoMethods = (programIds: ProgramIds) => {
  const methods: string[] = wc_aleo_methods.slice();
  for (let network of Object.keys(programIds) as Network[]) {
    const networkProgramIds = programIds[network];
    if (!networkProgramIds) continue;
    for (let programId of networkProgramIds) {
      methods.push(`${network}:${programId}`)
    }
  }

  return methods;
}

export const getProgramIdsFromWcMethods = (networks: Network[], methods: string[]): ProgramIds => {
  const programIds = methods.filter((method) => isWcProgramId(method));

  const programIdsRecord: ProgramIds = {};

  for (let programIdWithNetwork of programIds) {
    const split = programIdWithNetwork.split(':');
    const network: Network = split[0] as Network;
    const programId = split[1];
    if (networks.includes(network)) {
      if (!programIdsRecord[network]) {
        programIdsRecord[network] = []; // Initialize as an empty array if undefined
      }
      programIdsRecord[network]?.push(programId);
    }
  }

  return programIdsRecord;
}

export const getAleoChains = (networks: Network[]) => {
  return networks.map((network) => networkToChainId(network))
}

export const connect = async ({ programIds, showModal }: ConnectProps) => {
  const networks = Object.keys(programIds) as Network[];
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
              methods: getAleoMethods(programIds),
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
