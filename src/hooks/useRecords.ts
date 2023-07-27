import useClientWalletStore from './clientWalletStore.js';
import { useOnSessionEvent, useRequest, useSession } from '@walletconnect/modal-sign-react';
import { useEffect, useState } from 'react';
import { GetRecordsMessage, GetRecordsRejMessage, GetRecordsResMessage } from '../messaging/records.js';
import { SessionTypes } from '@walletconnect/types';

export const useRecords = ( programId?: string ) => {
  const session: SessionTypes.Struct = useSession();
  const [chainId] = useClientWalletStore((state) => [
    state.chainId,
  ]);
  const [records, setRecords] = useState<string[]>([]);
  const [error, setError] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  const { request, data, error: wc_error, loading: wc_loading } = useRequest({
    topic: session?.topic,
    chainId: chainId ?? 'aleo:1',
    request: {
      id: 1,
      jsonrpc: '2.0',
      method: 'aleo_getRecords',
      params: {
        type: 'GET_RECORDS',
        programId: programId,
      } as GetRecordsMessage
    },
  });

  // listen for wallet-originated balance updates
  useOnSessionEvent(({ id, params, topic }) => {
    const eventName = params.event.name;
    if (eventName === 'recordsChanged') {
      const newRecords: string[] = params.event.data;
      setRecords(newRecords);
      setError(undefined);
      setLoading(false);
    }
  });

  // send initial records request...
  useEffect(() => {
    if (session) {
      request();
      setLoading(true);
    }
  }, [session]);

  // ...and listen for response
  useEffect(() => {
    if (wc_error) {
      setRecords([]);
      setError(wc_error.message);
      setLoading(false);
    } else if (data) {
      const response = data as GetRecordsResMessage | GetRecordsRejMessage;
      const error = response.type === 'GET_RECORDS_REJ' ? response.data.error : undefined;
      const records = response.type === 'GET_RECORDS_RES' ? response.data.records : [];
      setRecords(records);
      setError(error);
      setLoading(false);
    }
  }, [data, wc_error]);

  return { records, error, loading };
};