import useClientWalletStore from './clientWalletStore.js';
import { useRequest, useSession } from '@walletconnect/modal-sign-react';
import { SessionTypes } from '@walletconnect/types';
import { DecryptReqMessage, DecryptRejMessage, DecryptResMessage} from '../messaging/decrypt.js';

export const useDecrypt = (
  ciphertext?: string
) => {
  const session: SessionTypes.Struct = useSession();
  const [chainId] = useClientWalletStore((state) => [
    state.chainId,
  ]);

  const { request, data: wc_data, error: wc_error, loading } = useRequest({
    topic: session?.topic ?? '',
    chainId: chainId ?? 'aleo:1',
    request: {
      id: 1,
      jsonrpc: '2.0',
      method: 'aleo_decrypt',
      params: {
        type: 'DECRYPT', 
        data: {
          ciphertext,
        },
      } as DecryptReqMessage,
    },
  });

  const error: string | undefined  = wc_error ? wc_error.message : (wc_data && wc_data.type === 'DECRYPT_REJ' ? wc_data.data.error : undefined);
  const puzzleData: DecryptResMessage | undefined =  wc_data &&  wc_data.type === 'DECRYPT_RES' ? wc_data : undefined;
  const decryptedText = puzzleData?.data.decryptedText;

  const decrypt = () => { 
    if (!ciphertext) return;
    request(); 
  }

  return { decrypt, decryptedText, loading, error };
};
