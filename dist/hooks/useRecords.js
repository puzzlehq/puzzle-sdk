import useClientWalletStore from './clientWalletStore.js';
import { useOnSessionEvent, useRequest, useSession } from '@walletconnect/modal-sign-react';
import { useEffect, useState } from 'react';
export const useRecords = () => {
    const session = useSession();
    const [chainId] = useClientWalletStore((state) => [
        state.chainId,
    ]);
    const [records, setRecords] = useState([]);
    const [error, setError] = useState(undefined);
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
            }
        },
    });
    // listen for wallet-originated balance updates
    useOnSessionEvent(({ id, params, topic }) => {
        const eventName = params.event.name;
        if (eventName === 'recordsChanged') {
            const newRecords = params.event.data;
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
        }
        else if (data) {
            const response = data;
            const error = response.type === 'GET_RECORDS_REJ' ? response.data.error : undefined;
            const records = response.type === 'GET_RECORDS_RES' ? response.data.records : [];
            setRecords(records);
            setError(error);
            setLoading(false);
        }
    }, [data, wc_error]);
    return { records, error, loading };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlUmVjb3Jkcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ob29rcy91c2VSZWNvcmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sb0JBQW9CLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM1RixPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUk1QyxNQUFNLENBQUMsTUFBTSxVQUFVLEdBQUcsR0FBRyxFQUFFO0lBQzdCLE1BQU0sT0FBTyxHQUF3QixVQUFVLEVBQUUsQ0FBQztJQUNsRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsb0JBQW9CLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDO1FBQ2hELEtBQUssQ0FBQyxPQUFPO0tBQ2QsQ0FBQyxDQUFDO0lBQ0gsTUFBTSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsR0FBRyxRQUFRLENBQVcsRUFBRSxDQUFDLENBQUM7SUFDckQsTUFBTSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsR0FBRyxRQUFRLENBQXFCLFNBQVMsQ0FBQyxDQUFDO0lBQ2xFLE1BQU0sQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRTlDLE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLFVBQVUsQ0FBQztRQUN6RSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUs7UUFDckIsT0FBTyxFQUFFLE9BQU8sSUFBSSxRQUFRO1FBQzVCLE9BQU8sRUFBRTtZQUNQLEVBQUUsRUFBRSxDQUFDO1lBQ0wsT0FBTyxFQUFFLEtBQUs7WUFDZCxNQUFNLEVBQUUsaUJBQWlCO1lBQ3pCLE1BQU0sRUFBRTtnQkFDTixJQUFJLEVBQUUsYUFBYTthQUNDO1NBQ3ZCO0tBQ0YsQ0FBQyxDQUFDO0lBRUgsK0NBQStDO0lBQy9DLGlCQUFpQixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7UUFDMUMsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDcEMsSUFBSSxTQUFTLEtBQUssZ0JBQWdCLEVBQUU7WUFDbEMsTUFBTSxVQUFVLEdBQWEsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDL0MsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3ZCLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNwQixVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbkI7SUFDSCxDQUFDLENBQUMsQ0FBQztJQUVILGtDQUFrQztJQUNsQyxTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2IsSUFBSSxPQUFPLEVBQUU7WUFDWCxPQUFPLEVBQUUsQ0FBQztZQUNWLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNsQjtJQUNILENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFFZCw2QkFBNkI7SUFDN0IsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNiLElBQUksUUFBUSxFQUFFO1lBQ1osVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMzQixVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbkI7YUFBTSxJQUFJLElBQUksRUFBRTtZQUNmLE1BQU0sUUFBUSxHQUFHLElBQW1ELENBQUM7WUFDckUsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLElBQUksS0FBSyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUNwRixNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsSUFBSSxLQUFLLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ2pGLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNwQixRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDaEIsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25CO0lBQ0gsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFFckIsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUM7QUFDckMsQ0FBQyxDQUFDIn0=