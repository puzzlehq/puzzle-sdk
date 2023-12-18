import pkg from '../package.json';

export * from './client.js';
export * from './data/events.js';
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

import { type Account, type Asset, AssetType, type AssetValue, type Event, type EventCreate, EventStatus, EventType, Network, type Record, Visibility, aleoAddressRegex, aleoFieldRegex, aleoPrivateKeyRegex, aleoTransactionIdRegex, aleoU32, aleoU64, aleoViewKeyRegex, zodAddress, zodEventStatus, zodEventType, zodField, zodNetwork, zodPrivateKey, zodTransactionId, zodU32, zodU64, zodViewKey, zodVisibility } from "@puzzlehq/types";;
export { type Account, type Asset, AssetType, type AssetValue, type Event, type EventCreate, EventStatus, EventType, Network, type Record, Visibility, aleoAddressRegex, aleoFieldRegex, aleoPrivateKeyRegex, aleoTransactionIdRegex, aleoU32, aleoU64, aleoViewKeyRegex, zodAddress, zodEventStatus, zodEventType, zodField, zodNetwork, zodPrivateKey, zodTransactionId, zodU32, zodU64, zodViewKey, zodVisibility };

const wc_keys = [
  'wc@2:client:0.3//proposal', 
  'wc@2:core:0.3//subscription',
  // 'wc@2:core:0.3//keychain',
  'wc@2:core:0.3//messages',
  'wc@2:core:0.3//history',
  'wc@2:client:0.3//session',
  'wc@2:core:0.3//expirer',
  'WCM_WALLETCONNECT_CLIENT_ID',
  'wc@2:core:0.3//pairing',
  'debug'
]

const packageVersion = pkg.version;

const clearKeys = async (keys: string[]) => {
  return new Promise<void>((resolve, reject) => {
    const request = window.indexedDB.open('WALLET_CONNECT_V2_INDEXED_DB');

    request.onerror = function(event) {
      console.log("Error opening WALLET_CONNECT_V2_INDEXED_DB", event);
      reject(event);
    };

    request.onsuccess = function (event) {
      // @ts-ignore:next-line
      let db = event.target.result;
      const transaction = db.transaction(['keyvaluestorage'], 'readwrite');
      const objectStore = transaction.objectStore('keyvaluestorage');

      keys.forEach((key) => {
        const removeRequest = objectStore.delete(key);

        removeRequest.onsuccess = function(event) {
          console.log(`${key} removed successfully`);
        };

        removeRequest.onerror = function(event) {
          console.log(`Error removing ${key}`, event);
          reject(event);
        };
      });

      transaction.oncomplete = function() {
        resolve();
      };
    };
  });
}

try {
  // Get the version from localStorage
  const localStorageVersion = window.localStorage.getItem('puzzle-sdk-version');

  // If versions don't match, clear WalletConnect localStorage items
  if (packageVersion !== localStorageVersion) {
    clearKeys(wc_keys);
    // Store the current version to localStorage
    window.localStorage.setItem('puzzle-sdk-version', packageVersion);
  }
} catch (e) {
  console.error(e);
}