import { useEffect } from 'react';
import { GetRecordsRequest, GetRecordsResponse, RecordWithPlaintext, RecordsFilter } from '../messages/records.js';
import { SessionTypes } from '@walletconnect/types';
import useWalletStore from '../store.js';
import { useSession } from './wc/useSession.js';
import { useRequest } from './wc/useRequest.js';
import { useOnSessionEvent } from './wc/useOnSessionEvent.js';

type UseRecordsOptions = {
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

export const useRecords = ( { address, multisig = false, filter, page }: UseRecordsOptions ) => {
  const session: SessionTypes.Struct | undefined = useSession();
  const [chainId, account] = useWalletStore((state) => [
    state.chainId, state.account
  ]);

  const { request, data: wc_data, error: wc_error, loading } = useRequest<GetRecordsResponse | undefined>({
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
  });

  const readyToRequest = !!session && !!account && (multisig ? !!address : true);

  // listen for wallet-originating account updates
  useOnSessionEvent(({ params, topic }) => {
    const eventName = params.event.name;
    const _address = params.event.address;
    if ((eventName === 'selectedAccountSynced' || eventName === 'accountSelected' || (eventName === 'sharedAccountSynced' && _address === address)) && readyToRequest && session.topic === topic ) {
      request();
    }
  });

  // send initial records request
  useEffect(() => {
    if (readyToRequest && !loading) {
      request();
    }
  }, [readyToRequest]);

  const fetchPage = () => {
    if (readyToRequest && !loading) {
      request();
    }
  }

  const error: string | undefined = wc_error ? (wc_error as Error).message : (wc_data && wc_data.error);
  const response: GetRecordsResponse | undefined =  wc_data;
  const records: RecordWithPlaintext[] | undefined = response?.records;
  const pageCount = response?.pageCount ?? 0;

  return { fetchPage, records, error, loading, page, pageCount };
};