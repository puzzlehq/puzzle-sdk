import { ConnectRequestParams, ConnectResponse } from '@puzzlehq/sdk-core';
export declare function useConnect(request: ConnectRequestParams): {
    data: ConnectResponse | undefined;
    error: unknown;
    loading: boolean;
    isConnected: boolean | undefined;
    connect: () => Promise<ConnectResponse>;
};
