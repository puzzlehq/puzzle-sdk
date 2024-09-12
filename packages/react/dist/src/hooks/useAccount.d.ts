import { Network } from '@puzzlehq/types';
export declare const shortenAddress: (address?: string, aleo?: boolean, length?: number, short?: boolean) => string;
export declare const useAccount: () => {
    account: import("@puzzlehq/sdk-core").PuzzleAccount | undefined;
    error: string | undefined;
    loading: boolean;
    network: Network | undefined;
};
