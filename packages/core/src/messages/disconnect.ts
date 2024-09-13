import { getSdkError } from '@walletconnect/utils';
import { getWalletConnectModalSignClient, emitter } from '../client.js';
import { SessionTypes } from '@walletconnect/types';

export const disconnect = async (): Promise<{ error?: string }> => {
  const connection = await getWalletConnectModalSignClient();
  const session: SessionTypes.Struct | undefined =
    await connection?.getSession();

  if (!session || !connection) {
    return { error: 'no session or connection' };
  }

  try {
    try {
      await connection.disconnect({
        topic: session.topic,
        reason: getSdkError('USER_DISCONNECTED'),
      });
      localStorage.removeItem('puzzle-hasInjectedConnection');
      emitter.emit('session_change');
    } catch (e) {
      console.warn(e);
    }
    return {};
  } catch (e) {
    console.error('error disconnecting', e);
    const error = (e as Error).message;
    return { error };
  }
};
