import { WalletConnectModalSign } from '@walletconnect/modal-sign-html';
export declare const emitter: any;
export type WalletConnectModalSignInstance = InstanceType<typeof WalletConnectModalSign>;
export declare function configureConnection(options: {
    dAppName: string;
    dAppDescription: string;
    dAppUrl: string;
    dAppIconURL: string;
}): void;
export declare function getWalletConnectModalSignClient(): Promise<WalletConnectModalSign>;
