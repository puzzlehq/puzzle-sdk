import useClientWalletStore from './clientWalletStore.js';
import { useOnSessionEvent, useRequest, useSession } from '@walletconnect/modal-sign-react';
import { useEffect } from 'react';
import { GetRecordsRequest, GetRecordsResponse, Record, RecordsFilter } from '../messaging/records.js';
import { SessionTypes } from '@walletconnect/types';

export const RECORDS_PER_PAGE = 50;

type UseRecordsParams = {
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

export const useRecords = ( {filter, page }: UseRecordsParams) => {
  const session: SessionTypes.Struct = useSession();
  const [chainId, account] = useClientWalletStore((state) => [
    state.chainId, state.account
  ]);

  if (filter?.program_id === '') {
    filter.program_id = undefined
  }

  const { request: wc_request, data: wc_data, error: wc_error, loading } = useRequest({
    topic: session?.topic,
    chainId: chainId ?? 'aleo:1',
    request: {
      id: 1,
      jsonrpc: '2.0',
      method: 'getRecords',
      params: {
        filter: filter,
        page,
      } as GetRecordsRequest,
    }
  });

  // listen for wallet-originated balance updates
  useOnSessionEvent(({ id, params, topic }) => {
    const eventName = params.event.name;
    if (eventName === 'accountSynced' && session && session.topic === topic && !loading) {
      wc_request();
    }
  });

  // send initial records request...
  const readyToRequest = !!session && !!account;
  useEffect(() => {
    if (readyToRequest && !loading) {
      wc_request();
    }
  }, [readyToRequest, account]);

  const request = () => {
    const readyToRequest = !!session && !!account;
    if (readyToRequest && !loading) {
      wc_request();
    }
  }

  const error: string | undefined = wc_error ? wc_error.message : (wc_data && wc_data.error);
  const response: GetRecordsResponse | undefined =  wc_data;
  const records: Record[] | undefined = response?.records;
  const totalRecordCount = response?.totalRecordCount ?? 0;

  return { request, records, error, loading, totalRecordCount };
};