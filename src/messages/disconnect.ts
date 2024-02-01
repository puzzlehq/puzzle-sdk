import { getSdkError } from '@walletconnect/utils';
import { getWalletConnectModalSignClient, emitter } from '../client.js';
import { SessionTypes } from '@walletconnect/types';
import useWalletStore from '../store.js';

export const disconnect = async (): Promise<{ error?: string }> => {
  const connection = await getWalletConnectModalSignClient();
  const session: SessionTypes.Struct | undefined =
    await connection?.getSession();

  if (!session || !connection) {
    if (!session) useWalletStore.getState().onDisconnect();
    return { error: 'no session or connection' };
  }

  try {
    try {
      await connection.disconnect({
        reason: getSdkError('USER_DISCONNECTED'),
        topic: session.topic,
      });
      emitter.emit('session_change');
    } catch (e) {
      console.warn(e);
    }
    useWalletStore.getState().onDisconnect();
    return {};
  } catch (e) {
    const error = (e as Error).message;
    console.error('error disconnecting', error);
    return { error };
  }
};
