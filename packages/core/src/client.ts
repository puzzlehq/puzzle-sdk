import { WalletConnectModalSign } from '@walletconnect/modal-sign-html';
import { projectId, web3modal_puzzle_props } from './data/walletconnect.js';
import EventEmitter from 'events';
import pkg from '../package.json'
import { getSdkError } from '@walletconnect/utils';
import { SessionTypes } from '@walletconnect/types';
import useWalletStore from './store.js';

export const emitter = new EventEmitter();

let connection: WalletConnectModalSign | undefined = undefined;

export type WalletConnectModalSignInstance = InstanceType<
  typeof WalletConnectModalSign
>;

export function configureConnection(options: {
  dAppName: string,
  dAppDescription: string,
  dAppUrl: string,
  dAppIconURL: string
}) {
  let disconnectSessions = false;
  // Check whether new version is installed
  const thisVersion = pkg.version;
  const prevVersion = localStorage.getItem('puzzle_sdk_version');

  if (thisVersion !== prevVersion) {
    console.log(`${pkg.name}: Updated from ` + prevVersion + ' to ' + thisVersion + '!');
    localStorage.setItem('puzzle_sdk_version', thisVersion);
    disconnectSessions = true;
  }

  connection = new WalletConnectModalSign({
    projectId,
    metadata: {
      name: options.dAppName,
      description: options.dAppDescription,
      url: options.dAppUrl,
      icons: [options.dAppIconURL],
    },
    modalOptions: { ...web3modal_puzzle_props },
  });

  if (disconnectSessions) {
    try {
      disconnectOnVersionChange(connection)
    } catch (e) {
      console.error(e);
    }
  }
  
  // remove to prevent walletconnect from redirecting to the wallet page
  window.localStorage.removeItem('WALLETCONNECT_DEEPLINK_CHOICE');
}

async function disconnectOnVersionChange(connection: WalletConnectModalSign) {
  const session: SessionTypes.Struct | undefined = await connection?.getSession();
  if (session) {
    console.log('Disconnecting session', session);
    useWalletStore.getState().onDisconnect()
    connection.disconnect({
      topic: session.topic,
      reason: getSdkError('USER_DISCONNECTED')
    });
  }
}

export async function getWalletConnectModalSignClient(): Promise<WalletConnectModalSign> {
  return new Promise((resolve) => {
    if (connection) {
      resolve(connection);
    } else {
      const interval = setInterval(() => {
        if (connection) {
          clearInterval(interval);
          resolve(connection);
        }
      }, 200);
    }
    // remove to prevent walletconnect from redirecting to the wallet page
    window.localStorage.removeItem('WALLETCONNECT_DEEPLINK_CHOICE');
  });
}
