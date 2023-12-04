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

  const { refetch, data: wc_data, error: wc_error, isLoading: loading } = useRequestQuery<GetRecordsResponse | undefined>({
    queryKey: ['useRecords', address, filter, page],
    enabled: (multisig ? !!address : true) && !!session,
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

  const readyToRequest = !!session && !!account && (multisig ? !!address : true);

  // listen for wallet-originating account updates
  useOnSessionEvent(({ params, topic }) => {
    const eventName = params.event.name;
    const _address = params.event.address;
    if ((eventName === 'selectedAccountSynced' || eventName === 'accountSelected' || (eventName === 'sharedAccountSynced' && _address === address)) && readyToRequest && session.topic === topic ) {
      refetch();
    }
  });

  // send initial records request
  useEffect(() => {
    if (readyToRequest && !loading) {
      refetch();
    }
  }, [readyToRequest]);

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