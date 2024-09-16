import { PuzzleAccount } from '@puzzlehq/sdk-core';
export declare const shortenAddress: (address?: string, aleo?: boolean, length?: number, short?: boolean) => string;
export declare const useAccount: () => {
    account: PuzzleAccount | undefined;
    error: string | undefined;
    loading: boolean;
    network: import("@puzzlehq/types").Network | undefined;
};
