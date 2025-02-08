import {  waitForInjectedConnection } from '../utils/clientInfo.js';

export const getIsConnected = async () => {
  await waitForInjectedConnection();
  if (!window.aleo.puzzleWalletClient.isConnected?.query)
    throw new Error('isConnected.query not found!');

  try {
    const isConnected: boolean =
    await window.aleo.puzzleWalletClient.isConnected.query({
      method: 'isConnected',
    });
    return isConnected;
  } catch (e) {
    console.error('connect error', e);
    throw e
  }
};
