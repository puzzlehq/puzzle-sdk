import useClientWalletStore from './clientWalletStore.js';
import { useOnSessionEvent, useRequest, useSession } from '@walletconnect/modal-sign-react';
import { useEffect, useState } from 'react';
import { GetRecordsMessage, GetRecordsRejMessage, GetRecordsResMessage, Record, RecordsFilter } from '../messaging/records.js';
import { SessionTypes } from '@walletconnect/types';

export const useRecords = ( filter?: RecordsFilter ) => {
  const session: SessionTypes.Struct = useSession();
  const [chainId, account] = useClientWalletStore((state) => [
    state.chainId, state.account
  ]);
  const [records, setRecords] = useState<Record[]>([]);
  const [error, setError] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  const { request, data: wc_data, error: wc_error, loading: wc_loading } = useRequest({
    topic: session?.topic,
    chainId: chainId ?? 'aleo:1',
    request: {
      id: 1,
      jsonrpc: '2.0',
      method: 'aleo_getRecords',
      params: {
        type: 'GET_RECORDS',
        filter: filter
      } as GetRecordsMessage
    },
  });

  // listen for wallet-originated balance updates
  useOnSessionEvent(({ id, params, topic }) => {
    const eventName = params.event.name;
    if (eventName === 'accountSynced' && session && session.topic === topic) {
      request();
      setLoading(true);
    }
  });

  // send initial records request...
  const readyToRequest = !!session && !!account;
  useEffect(() => {
    if (readyToRequest) {
      request();
      setLoading(true);
    }
  }, [readyToRequest, account]);

  // ...and listen for response
  useEffect(() => {
    if (wc_error) {
      setRecords([]);
      setError(wc_error.message);
      setLoading(false);
    } else if (wc_data) {
      const response = wc_data as GetRecordsResMessage | GetRecordsRejMessage;
      const error = response.type === 'GET_RECORDS_REJ' ? response.data.error : undefined;
      const records = response.type === 'GET_RECORDS_RES' ? response.data.records : [];
      setRecords(records);
      setError(error);
      setLoading(false);
    }
  }, [wc_data, wc_error]);

  return { records, error, loading };
};