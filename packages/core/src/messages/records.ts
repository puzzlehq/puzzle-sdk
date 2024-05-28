import { type RecordWithPlaintext } from '@puzzlehq/types';
import { getWalletConnectModalSignClient } from '../client.js';
import { SessionTypes } from '@walletconnect/types';
import { hasInjectedConnection } from '../utils/clientInfo.js';
import { wc_aleo_chains } from '../data/walletconnect.js';

export type RecordsFilter = {
  programIds?: string[];
  functionId?: string;
  type: 'all' | 'spent' | 'unspent' | 'pending';
  names?: string[];
};

export type GetRecordsRequest = {
  address?: string;
  filter?: RecordsFilter;
  page?: number;
  network?: string;
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
  network,
}: GetRecordsRequest): Promise<GetRecordsResponse> => {
  const connection = await getWalletConnectModalSignClient();

  const session: SessionTypes.Struct | undefined =
    await connection?.getSession();

  if (!session || !connection) {
    return { error: 'no session or connection' };
  }
  if (network && !wc_aleo_chains.includes(network)) {
    return { error: 'network not in wc_aleo_chains' };
  }

  const query = {
    topic: session.topic,
    chainId: network ?? 'aleo:1',
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

  if (hasInjectedConnection()) {
    try {
      const response: GetRecordsResponse =
        await window.aleo.puzzleWalletClient.getRecords.query(query);
      return response;
    } catch (e) {
      console.error('getRecords error', e);
      const error = (e as Error).message;
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
    console.error('getRecords error', e);
    const error = (e as Error).message;
    return { error };
  }
};
