import { PuzzleAccount } from "../index.js";

export type GetSelectedAccountMessage = {
  type: 'GET_SELECTED_ACCOUNT';
  data?: string;
  sender?: string;
};

export type GetSelectedAccountResMessage = {
  type: 'GET_SELECTED_ACCOUNT_RES';
  data: {
    account: PuzzleAccount;
  }
};

export type GetSelectedAccountRejMessage = {
  type: 'GET_SELECTED_ACCOUNT_REJ';
  data: {
    error?: string;
  }
};