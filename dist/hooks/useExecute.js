import useClientWalletStore from './clientWalletStore.js';
import { useRequest, useSession } from '@walletconnect/modal-sign-react';
export const useExecuteProgram = (executeProgramRequestData) => {
    const session = useSession();
    const [chainId] = useClientWalletStore((state) => [
        state.chainId,
    ]);
    const { request, data: wc_data, error: wc_error, loading } = useRequest({
        topic: session?.topic ?? '',
        chainId: 'aleo:1',
        request: {
            id: 1,
            jsonrpc: '2.0',
            method: 'aleo_executeProgram',
            params: {
                type: 'EXECUTE',
                data: {
                    data: executeProgramRequestData,
                },
            },
        }
    });
    const error = wc_error ? wc_error.message : (wc_data && wc_data.type === 'EXECUTE_REJ' ? wc_data.data.error : undefined);
    const puzzleData = wc_data && wc_data.type === 'EXECUTE_RES' ? wc_data : undefined;
    const transactionId = puzzleData?.data.transactionId;
    const execute = () => {
        if (!executeProgramRequestData)
            return;
        request();
        console.log('sent execute request');
    };
    return { execute, transactionId, error, loading };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlRXhlY3V0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ob29rcy91c2VFeGVjdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sb0JBQW9CLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUV6RSxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBRyxDQUMvQix5QkFBcUQsRUFDckQsRUFBRTtJQUNGLE1BQU0sT0FBTyxHQUF3QixVQUFVLEVBQUUsQ0FBQztJQUNsRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsb0JBQW9CLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDO1FBQ2hELEtBQUssQ0FBQyxPQUFPO0tBQ2QsQ0FBQyxDQUFDO0lBRUgsTUFBTSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLEdBQUcsVUFBVSxDQUFDO1FBQ3RFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDM0IsT0FBTyxFQUFFLFFBQVE7UUFDakIsT0FBTyxFQUFFO1lBQ1AsRUFBRSxFQUFFLENBQUM7WUFDTCxPQUFPLEVBQUUsS0FBSztZQUNkLE1BQU0sRUFBRSxxQkFBcUI7WUFDN0IsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSxTQUFTO2dCQUNmLElBQUksRUFBRTtvQkFDSixJQUFJLEVBQUUseUJBQXlCO2lCQUNoQzthQUNnQjtTQUNwQjtLQUNGLENBQUMsQ0FBQztJQUVILE1BQU0sS0FBSyxHQUF1QixRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxJQUFJLEtBQUssYUFBYSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDN0ksTUFBTSxVQUFVLEdBQW1DLE9BQU8sSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLGFBQWEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDbkgsTUFBTSxhQUFhLEdBQXVCLFVBQVUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDO0lBRXpFLE1BQU0sT0FBTyxHQUFHLEdBQUcsRUFBRTtRQUNuQixJQUFJLENBQUMseUJBQXlCO1lBQUUsT0FBTTtRQUN0QyxPQUFPLEVBQUUsQ0FBQztRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQTtJQUNyQyxDQUFDLENBQUE7SUFFRCxPQUFPLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUM7QUFDcEQsQ0FBQyxDQUFDIn0=