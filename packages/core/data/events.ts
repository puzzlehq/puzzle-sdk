import { Balance } from "../../react/index.js"

export type AccountSelectedResponse = {
  address: string,
  balances: Balance[],
}
export type AccountSyncedResponse = AccountSelectedResponse