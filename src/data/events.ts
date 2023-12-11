import { Balance } from "../index.js"

export type AccountSelectedResponse = {
  address: string,
  balances: Balance[],
}
export type AccountSyncedResponse = AccountSelectedResponse