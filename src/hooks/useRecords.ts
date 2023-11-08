import useClientWalletStore from './clientWalletStore.js';
import { useOnSessionEvent, useRequest, useSession } from '@walletconnect/modal-sign-react';
import { useEffect } from 'react';
import { GetRecordsRequest, GetRecordsResponse, Record, RecordsFilter } from '../messaging/records.js';
import { SessionTypes } from '@walletconnect/types';

type UseRecordsOptions = {
  address?: string;
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

export const useRecords = ( { address, filter, page }: UseRecordsOptions ) => {
  const session: SessionTypes.Struct = useSession();
  const [chainId, account] = useClientWalletStore((state) => [
    state.chainId, state.account
  ]);

  if (filter?.programId === '') {
    filter.programId = undefined;
  }

  const { request, data: wc_data, error: wc_error, loading } = useRequest({
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

  // listen for wallet-originating account updates
  useOnSessionEvent(({ params, topic }) => {
    const eventName = params.event.name;
    if (eventName === 'accountSynced' && session && session.topic === topic && !loading) {
      request();
    }
  });

  // send initial records request
  const readyToRequest = !!session && !!account;
  useEffect(() => {
    if (readyToRequest && !loading) {
      request();
    }
  }, [readyToRequest, account]);

  const fetchPage = () => {
    const readyToRequest = !!session && !!account;
    if (readyToRequest && !loading) {
      request();
    }
  }

  const error: string | undefined = wc_error ? wc_error.message : (wc_data && wc_data.error);
  const response: GetRecordsResponse | undefined =  wc_data;
  const records: Record[] | undefined = response?.records;
  const pageCount = response?.pageCount ?? 0;

  return { fetchPage, records, error, loading, page, pageCount };
};