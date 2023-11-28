import { Record } from '@puzzlehq/types';
import { getWalletConnectModalSignClient } from '../client.js';
import { SessionTypes } from '@walletconnect/types';

export type RecordWithPlaintext = Record & {
  plaintext: string;
  data: { [key: string]: string };
};

export type RecordsFilter = {
  programId?: string;
  functionId?: string;
  type: 'all' | 'spent' | 'unspent';
};

export type GetRecordsRequest = {
  address?: string;
  filter?: RecordsFilter;
  page?: number;
};

export type GetRecordsResponse = {
  records?: RecordWithPlaintext[];
  pageCount?: number;
  error?: string;
};

export const getRecords = async ({
  address,
  filter,
  page = 0,
}: GetRecordsRequest): Promise<GetRecordsResponse> => {
  const connection = await getWalletConnectModalSignClient();

  const session: SessionTypes.Struct | undefined =
    await connection?.getSession();
  const chainId = 'aleo:1';

  if (!session || !chainId || !connection) {
    return { error: 'no session, chainId, or connection' };
  }

  if (filter?.programId === '') {
    filter.programId = undefined;
  }

  const fetchPage = async (page = 0) => {
    const response: GetRecordsResponse = await connection.request({
      topic: session.topic,
      chainId: chainId,
      request: {
          jsonrpc: '2.0',
        method: 'getRecords',
        params: {
          address,
          filter,
          page,
        } as GetRecordsRequest,
      },
    });
    return response;
  };

  try {
    const response = await fetchPage();
    return response;
  } catch (e) {
    const error = (e as Error).message;
    console.error('getRecords error', error);
    return { error };
  }
};
