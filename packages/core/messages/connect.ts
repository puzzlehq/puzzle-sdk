import { wc_aleo_chains, wc_aleo_methods, wc_events } from '../../react/index.js';
import { getWalletConnectModalSignClient, emitter } from '../client.js';
import { SessionTypes } from '@walletconnect/types';

export const connect = async () => {
  const connection = await getWalletConnectModalSignClient();
  if (!connection) {
    throw new Error('call setConnection() first!');
  }

  const existingSession: SessionTypes.Struct | undefined = await connection.getSession()
  if (existingSession) {
    console.log('Already connected!', existingSession);
    return existingSession;
  }

  try {
    const newSession: SessionTypes.Struct | undefined = await connection.connect({
      requiredNamespaces: {
        aleo: {
          methods: wc_aleo_methods,
          chains: wc_aleo_chains,
          events: wc_events,
        },
      },
    });
    emitter.emit('session_change');

    // remove to prevent walletconnect from redirecting to the wallet page
    window.localStorage.removeItem('WALLETCONNECT_DEEPLINK_CHOICE');

    return newSession;
  } catch (e) {
    console.error('connect error', (e as Error).message);
  }
};
