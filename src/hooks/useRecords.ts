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

  if (filter?.program_id === '') {
    filter.program_id = undefined
  }

  const { request: wc_request, data: wc_data, error: wc_error, loading } = useRequest({
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

  // ...and listen for response
  useEffect(() => {
    if (wc_error) {
      setRecords([]);
      setError(wc_error.message);
    } else if (wc_data) {
      const response = wc_data as GetRecordsResMessage | GetRecordsRejMessage;
      const error = response.type === 'GET_RECORDS_REJ' ? response.data.error : undefined;
      const records = response.type === 'GET_RECORDS_RES' ? response.data.records : [];
      setRecords(records);
      setError(error);
    }
  }, [wc_data, wc_error]);

  const request = () => {
    const readyToRequest = !!session && !!account;
    if (readyToRequest && !loading) {
      console.log('wc_requesting records!')
      wc_request();
    }
  }

  // clear the records on disconnect
  useEffect(() => {
    if (account === undefined) {
      setRecords([]);
    }
  }, [account])

  return { request, records, error, loading };
};