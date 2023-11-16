import { WalletConnectModalSign } from '@walletconnect/modal-sign-html';
import { projectId, web3modal_puzzle_props } from './data/walletconnect.js';
import mitt, { Emitter } from 'mitt';
import useWalletStore from './store.js';

/** @ts-ignore-next-line */
export const emitter: Emitter<any> = mitt<any>();

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
  useWalletStore.setState({account: undefined});
  // remove to prevent walletconnect from redirecting to the wallet page
  window.localStorage.removeItem('WALLETCONNECT_DEEPLINK_CHOICE');
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
