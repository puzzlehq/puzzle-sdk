/// <reference types="node" resolution-mode="require"/>
import { WalletConnectModalSign } from '@walletconnect/modal-sign-html';
import EventEmitter from 'events';
export declare const emitter: EventEmitter;
export declare let connection: WalletConnectModalSign | undefined;
export type WalletConnectModalSignInstance = InstanceType<typeof WalletConnectModalSign>;
export declare function configureConnection(options: {
    dAppName: string;
    dAppDescription: string;
    dAppUrl?: string;
    dAppIconURL: string;
    projectId?: string;
    onDisconnect?: () => any;
}): Promise<any>;
export declare function getWalletConnectModalSignClient(): Promise<WalletConnectModalSign>;
