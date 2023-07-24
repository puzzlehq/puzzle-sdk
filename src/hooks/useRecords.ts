import useClientWalletStore from './clientWalletStore.js';
import { useRequest } from '@walletconnect/modal-sign-react';
import { useEffect, useState } from 'react';
import { useWallet } from './useWallet.js';
import { GetRecordsMessage, GetRecordsRejMessage, GetRecordsResMessage } from '../messaging/records.js';

export const useRecords = () => {
  const { session } = useWallet(); 
  const { signClient } = useClientWalletStore();
  const [records, setRecords] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const { request, data, error: wc_error, _ } = useRequest({
    topic: session?.topic,
    chainId: 'aleo:1',
    request: {
      id: 1,
      jsonrpc: '2.0',
      method: 'aleo_getRecords',
      params: {
        type: 'GET_RECORDS',
      } as GetRecordsMessage
    },
  });

  // listen for wallet-originated balance updates
  useEffect(() => {
    if (signClient && session) {
      signClient.events.on('session_event', ({ id, params, topic }) => {
        if (topic !== session.topic) return;
        const eventName = params.event.name;
        if (eventName === 'accountsChanged') {
          setLoading(true)
        } else if (eventName === 'recordsChanged') {
          const newRecords: string[] = params.event.data;
          setRecords(newRecords);
          setLoading(false)
        }
      });
    }
  }, [signClient, session])

  // send initial records request...
  useEffect(() => { 
    if (session) {
      setLoading(true);
      request();
    }
  }, [session]);

  // ...and listen for response
  useEffect(() => { 
    if (wc_error) {
      setError(wc_error.message);
      setLoading(false);
    } else if (data) {
      const response = data as GetRecordsResMessage | GetRecordsRejMessage;
      const error = response.type === 'GET_RECORDS_REJ' ? response.data.error : undefined;
      const records = response.type === 'GET_RECORDS_RES' ? response.data.records : [];
      setLoading(false);
      setRecords(records);
      setError(error)
    }
  }, [data, wc_error]);

  return { records, loading, error };
};