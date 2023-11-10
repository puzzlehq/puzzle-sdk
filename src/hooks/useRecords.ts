import useClientWalletStore from './clientWalletStore.js';
import { useOnSessionEvent, useRequest, useSession } from '@walletconnect/modal-sign-react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { GetRecordsRequest, GetRecordsResponse, Record, RecordsFilter } from '../messaging/records.js';
import { SessionTypes } from '@walletconnect/types';

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
  const session: SessionTypes.Struct = useSession();
  const [chainId, account] = useClientWalletStore((state) => [
    state.chainId, state.account
  ]);
  const [page, setPage] = useState(0);
  const [allRecords, setAllRecords] = useState<Record[]>([]);
  const [loading, setLoading] = useState(true);

  const readyToRequest = useMemo(() => {
    return !!session && !!account;
  }, [session, account]);

  if (filter?.programId === '') {
    filter.programId = undefined;
  }

  console.log('filter', filter);

  const { request, data: wc_data, error: wc_error } = useRequest({
    topic: session?.topic,
    chainId: chainId,
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

  const runRequest = useCallback(async () => {
    request();
  }, [request])
      
  useEffect(() => {
    if (readyToRequest) {
      console.log('running request');
      runRequest()
    }
  }, [page, readyToRequest])

  useEffect(() => {
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
    }
  }, [wc_data])

  const error: string | undefined = wc_error ? wc_error.message : (wc_data && wc_data.error);
  const response: GetRecordsResponse | undefined =  wc_data;
  const pageCount = response?.pageCount ?? 0;

  // listen for wallet-originating account updates
  useOnSessionEvent(({ params, topic }) => {
    const eventName = params.event.name;
    if (eventName === 'accountSynced' && session && session.topic === topic && !loading) {
      refetch();
    }
  });

  const refetch = () => {
    setAllRecords([]);
    setLoading(true);
    setPage(0);
  };

  console.log('error', error);

  return { records: allRecords, error, loading: page !== pageCount - 1, refetch };
};
