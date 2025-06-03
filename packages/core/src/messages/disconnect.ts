import { hasInjectedConnection } from '../utils/clientInfo.js';
import { SdkError } from '../data/errors.js';
import { GenericRequest } from '../data/types.js';
import { PuzzleWalletSDKEventEmitter } from '../utils/eventEmitter.js';

export const disconnect = async (): Promise<void> => {
  if (!hasInjectedConnection())
    throw new Error(`disconnect ${SdkError.PuzzleWalletNotDetected}`);
  if (!window.aleo.puzzleWalletClient.disconnect?.mutate)
    throw new Error('disconnect.mutate not found!');

  const req: GenericRequest = {
    method: 'disconnect',
  };

  try {
    await window.aleo.puzzleWalletClient.disconnect.mutate(req);
    PuzzleWalletSDKEventEmitter.emit('disconnectSuccess', 'disconnected');
  } catch (e) {
    console.error('error disconnecting', e);
    throw e
  }
};
