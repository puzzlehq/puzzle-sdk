import { PuzzleWalletClient } from '../../../../firenze/apps/wallet/src/scripts/puzzle_wallet_client.ts';

declare global {
  interface Window {
    aleo: PuzzleWalletClient;
  }
}
