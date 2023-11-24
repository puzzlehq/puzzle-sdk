
import { useCallback, useEffect, useMemo, useState } from 'react';
import { GetRecordsRequest, GetRecordsResponse, RecordWithPlaintext, RecordsFilter } from '../messages/records.js';
import { SessionTypes } from '@walletconnect/types';
import { useAccount } from './useAccount.js';
import { useSession } from './wc/useSession.js';
import { useRequest } from './wc/useReact.js';
import { useOnSessionEvent } from './wc/useOnSessionEvent.js';

type UseRecordsOptions = {
  address?: string;
  filter?: RecordsFilter,
}

export const getFormattedRecordPlaintext = (data: any) => {
  try {
    return JSON.stringify(data, null, 2).replaceAll('\"', '') ?? '';
  } catch {
    return '';
  }
}

export const useRecords = ( { address, filter }: UseRecordsOptions ) => {
  const session: SessionTypes.Struct | undefined = useSession();
  const { account } = useAccount();
  const [page, setPage] = useState(0);
  const [allRecords, setAllRecords] = useState<RecordWithPlaintext[]>([]);
  const [loading, setLoading] = useState(true);

  const readyToRequest = useMemo(() => {
    return !!session && !!account;
  }, [session, account]);

  if (filter?.programId === '') {
    filter.programId = undefined;
  }

  console.log('filter, page', { filter, page });

  const { request, data: wc_data, error: wc_error } = useRequest({
    topic: session?.topic,
    chainId: 'aleo:1',
    request: {
      id: 1,
      jsonrpc: '2.0',
      method: 'getRecords',
      params: {
        address,
        filter,
        page,
      } as GetRecordsRequest,
    }
  });
  const error: string | undefined = wc_error ? (wc_error as Error).message : (wc_data && wc_data.error);
  const response: GetRecordsResponse | undefined =  wc_data;
  const pageCount = response?.pageCount ?? 0;

  const runRequest = useCallback(async () => {
    request();
  }, [request])

  useEffect(() => {
    if (readyToRequest && loading) {
      console.log('running request');
      runRequest()
    }
  }, [page, readyToRequest, loading])

  useEffect(() => {
    console.log('response useEffect');
    if (wc_data) {
      console.log('fetched records', wc_data.records);
      setAllRecords(oldRecords => [...oldRecords,...wc_data.records])
      if (page < wc_data.pageCount - 1) {
        console.log('setting page', page + 1);
        setPage(page => page + 1);
      } else {
        console.log('done');
        setLoading(false);
      }
    } else {
      console.log('could not fetch records', wc_data);
    }
  }, [wc_data])

  // listen for wallet-originating account updates
  useOnSessionEvent(({ params, topic }) => {
    const eventName = params.event.name;
    if (eventName === 'accountSynced' && session && session.topic === topic && !loading) {
      refetch();
    }
  });

  const refetch = () => {
    setLoading(true);
    setAllRecords([]);
    setPage(0);
  };

  return { records: allRecords, error, loading: page !== pageCount - 1, refetch };
};