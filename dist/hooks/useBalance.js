import useClientWalletStore from './clientWalletStore.js';
import { useOnSessionEvent, useRequest, useSession } from '@walletconnect/modal-sign-react';
import { useEffect, useState } from 'react';
export const useBalance = () => {
    const session = useSession();
    const [chainId] = useClientWalletStore((state) => [
        state.chainId,
    ]);
    const [balance, setBalance] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(undefined);
    const { request, data: wc_data, error: wc_error, loading: wc_loading } = useRequest({
        topic: session?.topic,
        chainId: chainId ?? 'aleo:1',
        request: {
            id: 1,
            jsonrpc: '2.0',
            method: 'aleo_getBalance',
            params: {
                type: 'GET_BALANCE',
                data: {
                    assetId: undefined
                }
            }
        },
    });
    // listen for wallet-originated balance updates
    useOnSessionEvent(({ id, params, topic }) => {
        const eventName = params.event.name;
        if (eventName === 'balanceChanged') {
            const newBalance = Number(params.event.data);
            setBalance(newBalance);
            setError(undefined);
            setLoading(false);
        }
    });
    // send initial balance request...
    useEffect(() => {
        if (session) {
            request();
            setLoading(true);
        }
    }, [session]);
    // ...and listen for response
    useEffect(() => {
        if (wc_error) {
            setBalance(0);
            setError(wc_error.message);
            setLoading(false);
        }
        else if (wc_data) {
            const puzzleData = wc_data && wc_data.type === 'GET_BALANCE_RES' ? wc_data : undefined;
            const error = wc_data && wc_data.type === 'GET_BALANCE_REJ' ? wc_data.data.error : undefined;
            const balance = puzzleData?.data.balance ?? 0;
            setBalance(balance);
            setError(error);
            setLoading(false);
        }
    }, [wc_data, wc_error]);
    return { loading, balance, error };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlQmFsYW5jZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ob29rcy91c2VCYWxhbmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sb0JBQW9CLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM1RixPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUk1QyxNQUFNLENBQUMsTUFBTSxVQUFVLEdBQUcsR0FBRyxFQUFFO0lBQzdCLE1BQU0sT0FBTyxHQUF3QixVQUFVLEVBQUUsQ0FBQztJQUNsRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsb0JBQW9CLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDO1FBQ2hELEtBQUssQ0FBQyxPQUFPO0tBQ2QsQ0FBQyxDQUFDO0lBRUgsTUFBTSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUMsTUFBTSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsR0FBRyxRQUFRLENBQXFCLFNBQVMsQ0FBQyxDQUFDO0lBRWxFLE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxVQUFVLENBQUM7UUFDbEYsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLO1FBQ3JCLE9BQU8sRUFBRSxPQUFPLElBQUksUUFBUTtRQUM1QixPQUFPLEVBQUU7WUFDUCxFQUFFLEVBQUUsQ0FBQztZQUNMLE9BQU8sRUFBRSxLQUFLO1lBQ2QsTUFBTSxFQUFFLGlCQUFpQjtZQUN6QixNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLGFBQWE7Z0JBQ25CLElBQUksRUFBRTtvQkFDSixPQUFPLEVBQUUsU0FBUztpQkFDbkI7YUFDbUI7U0FDdkI7S0FDRixDQUFDLENBQUM7SUFFSCwrQ0FBK0M7SUFDL0MsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtRQUMxQyxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztRQUNwQyxJQUFJLFNBQVMsS0FBSyxnQkFBZ0IsRUFBRTtZQUNsQyxNQUFNLFVBQVUsR0FBVyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNyRCxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDdkIsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3BCLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuQjtJQUNILENBQUMsQ0FBQyxDQUFDO0lBRUgsa0NBQWtDO0lBQ2xDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDYixJQUFJLE9BQU8sRUFBRTtZQUNYLE9BQU8sRUFBRSxDQUFDO1lBQ1YsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUVkLDZCQUE2QjtJQUM3QixTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2IsSUFBSSxRQUFRLEVBQUU7WUFDWixVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZCxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzNCLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuQjthQUFNLElBQUksT0FBTyxFQUFFO1lBQ2xCLE1BQU0sVUFBVSxHQUFxQyxPQUFPLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDekgsTUFBTSxLQUFLLEdBQXVCLE9BQU8sSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1lBQ2pILE1BQU0sT0FBTyxHQUFHLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQztZQUM5QyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDcEIsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hCLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtTQUNsQjtJQUNILENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBRXhCLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDO0FBQ3JDLENBQUMsQ0FBQyJ9