export type ImportSharedStateRequest = {
  seed: string;
}

export type ImportSharedStateResponse = {
  address?: string;
  error?: string;
}