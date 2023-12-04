import pkg from '../package.json';

export * from './client.js';
export * from './data/types.js';
export * from './data/walletconnect.js';
export * from './hooks/useAccount.js';
export * from './hooks/useBalance.js';
export * from './hooks/useConnect.js';
export * from './hooks/useCreateSharedState.js'
export * from './hooks/useDecrypt.js'
export * from './hooks/useDisconnect.js'
export * from './hooks/useEvent.js'
export * from './hooks/useEvents.js'
export * from './hooks/useImportSharedState.js'
export * from './hooks/useRecords.js'
export * from './hooks/useRequestSignature.js'
export * from './hooks/useRequestCreateEvent.js'
export * from './hooks/wc/useOnSessionDelete.js';
export * from './hooks/wc/useOnSessionEvent.js';
export * from './hooks/wc/useOnSessionExpire.js';
export * from './hooks/wc/useOnSessionUpdate.js';
export * from './hooks/wc/useSession.js';
export * from './messages/index.js';
export * from './provider/PuzzleWalletProvider.js'

export * from "@puzzlehq/types";

const wc_keys = [
  'wc@2:client:0.3//proposal', 
  'wc@2:core:0.3//subscription',
  'wc@2:core:0.3//keychain',
  'wc@2:core:0.3//messages',
  'wc@2:core:0.3//history',
  'wc@2:client:0.3//session',
  'wc@2:core:0.3//expirer',
  'WCM_WALLETCONNECT_CLIENT_ID',
  'wc@2:core:0.3//pairing',
  'debug'
]

const packageVersion = pkg.version;

try {
  // Get the version from localStorage
  const localStorageVersion = localStorage.getItem('puzzle-sdk-version');

  // If versions don't match, clear WalletConnect localStorage items
  if (packageVersion !== localStorageVersion) {
    wc_keys.forEach((key) => {
      localStorage.removeItem(key)
    })

    // Store the current version to localStorage
    localStorage.setItem('puzzle-sdk-version', packageVersion);
  }
} catch (e) {
  console.error(e);
}