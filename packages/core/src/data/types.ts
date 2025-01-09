import { Network } from "@puzzlehq/types";

export type PuzzleAccount = {
  network: string;
  chainId: string;
  address: string;
  shortenedAddress: string;
};

export type ProgramIdPermissions = Partial<Record<Network, string[]>>; // Network, programId[]
