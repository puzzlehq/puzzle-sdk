import { WalletConnectModalSign } from '@walletconnect/modal-sign-html';
import { EventEmitter } from 'eventemitter3';
export declare const emitter: EventEmitter<string | symbol, any>;
export type WalletConnectModalSignInstance = InstanceType<typeof WalletConnectModalSign>;
export declare function configureConnection(options: {
    dAppName: string;
    dAppDescription: string;
    dAppUrl: string;
    dAppIconURL: string;
}): void;
export declare function getWalletConnectModalSignClient(): Promise<WalletConnectModalSign>;
