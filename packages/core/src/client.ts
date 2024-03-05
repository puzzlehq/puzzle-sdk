import { WalletConnectModalSign } from '@walletconnect/modal-sign-html';
import {
  projectId as puzzleProjectId,
  web3modal_puzzle_props,
} from './data/walletconnect.js';
import EventEmitter from 'events';
import pkg from '../package.json';
import { getSdkError } from '@walletconnect/utils';
import { SessionTypes } from '@walletconnect/types';

export const emitter = new EventEmitter();

let connection: WalletConnectModalSign | undefined = undefined;

export type WalletConnectModalSignInstance = InstanceType<
  typeof WalletConnectModalSign
>;

export async function configureConnection(options: {
  dAppName: string;
  dAppDescription: string;
  dAppUrl?: string;
  dAppIconURL: string;
  projectId?: string;
  onDisconnect?: () => any;
}) {
  let disconnectSessions = false;
  // Check whether new version is installed
  const thisVersion = pkg.version;
  const prevVersion = localStorage.getItem('puzzle_sdk_version');

  if (thisVersion !== prevVersion) {
    console.log(
      `${pkg.name}: Updated from ` + prevVersion + ' to ' + thisVersion + '!',
    );
    localStorage.setItem('puzzle_sdk_version', thisVersion);
    disconnectSessions = true;
  }

  console.log('web3modal_puzzle_props', web3modal_puzzle_props);

  connection = new WalletConnectModalSign({
    projectId: options.projectId ?? puzzleProjectId,
    metadata: {
      name: options.dAppName,
      description: options.dAppDescription,
      url: window ? window.location.hostname : options.dAppUrl ?? 'NO URL',
      icons: [options.dAppIconURL],
    },
    modalOptions: { ...web3modal_puzzle_props },
  });

  if (disconnectSessions) {
    localStorage.removeItem('puzzle-hasDesktopConnection');
    try {
      disconnectOnVersionChange(connection, options.onDisconnect);
    } catch (e) {
      console.error(e);
    }
  }

  connection.onSessionDelete(() => {
    localStorage.removeItem('puzzle-hasDesktopConnection');
    options.onDisconnect && options.onDisconnect();
  });

  connection.onSessionExpire(() => {
    localStorage.removeItem('puzzle-hasDesktopConnection');
    options.onDisconnect && options.onDisconnect();
  });

  // remove to prevent walletconnect from redirecting to the wallet page
  window.localStorage.removeItem('WALLETCONNECT_DEEPLINK_CHOICE');
}

async function disconnectOnVersionChange(
  connection: WalletConnectModalSign,
  onDisconnect?: () => any,
) {
  const session: SessionTypes.Struct | undefined =
    await connection?.getSession();
  if (session) {
    console.log('Disconnecting session', session);
    onDisconnect && onDisconnect();
    connection.disconnect({
      topic: session.topic,
      reason: getSdkError('USER_DISCONNECTED'),
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
