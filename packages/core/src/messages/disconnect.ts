
import { hasInjectedConnection } from '../utils/clientInfo.js';
import { SdkError } from '../data/errors.js';

export const disconnect = async (): Promise<{ error?: string }> => {
  if (!hasInjectedConnection()) throw new Error(SdkError.PuzzleWalletNotDetected);
  if (!window.aleo.puzzleWalletClient.disconnect?.mutate) throw new Error('disconnect not found!')

  try {
    await window.aleo.puzzleWalletClient.disconnect.mutate();
    return {};
  } catch (e) {
    console.error('error disconnecting', e);
    const error = (e as Error).message;
    return { error };
  }
};
