import { getSdkError } from '@walletconnect/utils';
import { getWalletConnectModalSignClient, emitter } from '../client.js';
export const disconnect = async () => {
    const connection = await getWalletConnectModalSignClient();
    const session = await connection?.getSession();
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
        }
        catch (e) {
            console.warn(e);
        }
        return {};
    }
    catch (e) {
        console.error('error disconnecting', e);
        const error = e.message;
        return { error };
    }
};
