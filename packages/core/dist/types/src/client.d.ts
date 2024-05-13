/// <reference types="node" resolution-mode="require"/>
import { WalletConnectModalSign } from '@puzzlehq/walletconnect-modal-sign-html';
import EventEmitter from 'events';
export declare const emitter: EventEmitter<[never]>;
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
