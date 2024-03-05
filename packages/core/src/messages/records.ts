import { type RecordWithPlaintext } from '@puzzlehq/types';
import { getWalletConnectModalSignClient } from '../client.js';
import { SessionTypes } from '@walletconnect/types';
import { hasDesktopConnection } from '../utils/clientInfo.js';

export type RecordsFilter = {
  programIds?: string[];
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

  if (!session || !connection) {
    return { error: 'no session or connection' };
  }

  const query = {
    topic: session.topic,
    chainId: 'aleo:3',
    request: {
      jsonrpc: '2.0',
      method: 'getRecords',
      params: {
        address,
        filter,
        page,
      } as GetRecordsRequest,
    },
  };

  if (hasDesktopConnection()) {
    console.log('getRecords: test 1');
    try {
      const response: GetRecordsResponse =
        await window.aleo.puzzleWalletClient.getRecords.query(query);
      console.log('getRecords: test 2', response);
      return response;
    } catch (e) {
      const error = (e as Error).message;
      console.error('getRecords error', error);
      return { error };
    }
  }

  const fetchPage = async (page = 0) => {
    const response: GetRecordsResponse = await connection.request(query);
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
