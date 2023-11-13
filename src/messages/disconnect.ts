import { getSdkError } from '@walletconnect/utils';
import { getWalletConnectModalSignClient, emitter } from '../client.js';
import { SessionTypes } from '@walletconnect/types';

export const disconnect = async (): Promise<{ error?: string }> => {
  const connection = await getWalletConnectModalSignClient();
  const session: SessionTypes.Struct | undefined =
    await connection?.getSession();

  if (!session || !connection) {
    return { error: 'no session, or connection' };
  }

  try {
    await connection.disconnect({
      reason: getSdkError('USER_DISCONNECTED'),
      topic: session.topic,
    });
    emitter.emit('session_change');
    emitter.emit('session_delete');
    return {};
  } catch (e) {
    const error = (e as Error).message;
    console.error('error disconnecting', error);
    return { error };
  }
};
