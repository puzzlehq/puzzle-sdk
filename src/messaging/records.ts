import { Record } from '../../../firenze/apps/wiseguy/prisma/generated/zod/index.js';

export type GetRecordsMessage = {
  type: 'GET_RECORDS';
  data?: string;
  sender?: string;
};

export type GetRecordsResMessage = {
  type: 'GET_RECORDS_RES';
  data: {
    records: Record[];
  }
};

export type GetRecordsRejMessage = {
  type: 'GET_RECORDS_REJ';
  data: {
    error?: string;
  }
};