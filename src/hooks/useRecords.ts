import { useEffect } from 'react';
import { GetRecordsRequest, GetRecordsResponse, RecordWithPlaintext, RecordsFilter } from '../messages/records.js';
import { SessionTypes } from '@walletconnect/types';
import useWalletStore from '../store.js';
import { useSession } from './wc/useSession.js';
import { useRequestQuery } from './wc/useRequest.js';
import { useOnSessionEvent } from './wc/useOnSessionEvent.js';

type UseRecordsParams = {
  address?: string;
  multisig?: boolean;
  filter?: RecordsFilter,
  page?: number,
}

export const getFormattedRecordPlaintext = (data: any) => {
  try {
    return JSON.stringify(data, null, 2).replaceAll('\"', '') ?? '';
  } catch {
    return '';
  }
}

export const useRecords = ( { address, multisig = false, filter, page }: UseRecordsParams ) => {
  const session: SessionTypes.Struct | undefined = useSession();
  const [chainId, account] = useWalletStore((state) => [
    state.chainId, state.account
  ]);

  const enabled = (multisig ? !!address : true) && !!session && !!account;
  console.log('enabled', enabled);

  const { refetch, data: wc_data, error: wc_error, isLoading: loading } = useRequestQuery<GetRecordsResponse | undefined>({
    queryKey: ['useRecords', account?.address, address, filter, page],
    enabled,
    wcParams: {
      topic: session?.topic,
      chainId: chainId,
      request: {
        jsonrpc: '2.0',
        method: 'getRecords',
        params: {
          address,
          filter,
          page,
        } as GetRecordsRequest,
      }
    }
  });

  console.log('useRecords wc_data', wc_data);

  const readyToRequest = !!session && !!account && (multisig ? !!address : true);

  const fetchPage = () => {
    if (readyToRequest && !loading) {
      refetch();
    }
  }

  const error: string | undefined = wc_error ? (wc_error as Error).message : (wc_data && wc_data.error);
  const response: GetRecordsResponse | undefined =  wc_data;
  const records: RecordWithPlaintext[] | undefined = response?.records;
  const pageCount = response?.pageCount ?? 0;

  return { fetchPage, records, error, loading, page, pageCount };
};