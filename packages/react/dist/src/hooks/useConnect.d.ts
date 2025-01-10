import { ConnectRequest, ConnectResponse } from '@puzzlehq/sdk-core';
export declare function useConnect(request: ConnectRequest): {
    data: ConnectResponse | undefined;
    error: unknown;
    loading: boolean;
    isConnected: boolean | undefined;
    connect: () => Promise<ConnectResponse>;
};
