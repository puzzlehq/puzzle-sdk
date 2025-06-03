import { waitForInjectedConnection } from '../utils/clientInfo.js';
import { PuzzleWalletSDKEventEmitter } from '../utils/eventEmitter.js';
export const connect = async (request) => {
    await waitForInjectedConnection();
    if (!window.aleo.puzzleWalletClient.connect?.mutate)
        throw new Error('connect.mutate not found!');
    try {
        const connectRequest = {
            method: 'connect',
            params: request,
        };
        const connectResponse = await window.aleo.puzzleWalletClient.connect.mutate(connectRequest);
        PuzzleWalletSDKEventEmitter.emit('connectSuccess', connectResponse); // Emit the event on success
        return connectResponse;
    }
    catch (e) {
        console.error('connect error', e);
        throw e;
    }
};
