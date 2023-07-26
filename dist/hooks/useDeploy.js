import useClientWalletStore from './clientWalletStore.js';
import { useRequest, useSession } from '@walletconnect/modal-sign-react';
export const useDeployProgram = (deployProgramRequestData) => {
    const session = useSession();
    const [chainId] = useClientWalletStore((state) => [
        state.chainId,
    ]);
    const { request, data: wc_data, error: wc_error, loading } = useRequest({
        topic: session?.topic ?? '',
        chainId: chainId ?? 'aleo:1',
        request: {
            id: 1,
            jsonrpc: '2.0',
            method: 'aleo_deployProgram',
            params: {
                type: 'DEPLOY',
                data: {
                    data: deployProgramRequestData,
                },
            },
        },
    });
    const error = wc_error ? wc_error.message : (wc_data && wc_data.type === 'DEPLOY_REJ' ? wc_data.data.error : undefined);
    const puzzleData = wc_data && wc_data.type === 'DEPLOY_RES' ? wc_data : undefined;
    const transactionId = puzzleData?.data.transactionId;
    const deploy = () => {
        if (!deployProgramRequestData)
            return;
        request();
    };
    return { deploy, transactionId, loading, error };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlRGVwbG95LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2hvb2tzL3VzZURlcGxveS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLG9CQUFvQixNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFJekUsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQUcsQ0FDOUIsd0JBQWlELEVBQ2pELEVBQUU7SUFDRixNQUFNLE9BQU8sR0FBd0IsVUFBVSxFQUFFLENBQUM7SUFDbEQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLG9CQUFvQixDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQztRQUNoRCxLQUFLLENBQUMsT0FBTztLQUNkLENBQUMsQ0FBQztJQUVILE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxHQUFHLFVBQVUsQ0FBQztRQUN0RSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQzNCLE9BQU8sRUFBRSxPQUFPLElBQUksUUFBUTtRQUM1QixPQUFPLEVBQUU7WUFDUCxFQUFFLEVBQUUsQ0FBQztZQUNMLE9BQU8sRUFBRSxLQUFLO1lBQ2QsTUFBTSxFQUFFLG9CQUFvQjtZQUM1QixNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsSUFBSSxFQUFFO29CQUNKLElBQUksRUFBRSx3QkFBd0I7aUJBQy9CO2FBQ2U7U0FDbkI7S0FDRixDQUFDLENBQUM7SUFFSCxNQUFNLEtBQUssR0FBd0IsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLFlBQVksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzdJLE1BQU0sVUFBVSxHQUFrQyxPQUFPLElBQUssT0FBTyxDQUFDLElBQUksS0FBSyxZQUFZLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ2xILE1BQU0sYUFBYSxHQUFHLFVBQVUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDO0lBRXJELE1BQU0sTUFBTSxHQUFHLEdBQUcsRUFBRTtRQUNsQixJQUFJLENBQUMsd0JBQXdCO1lBQUUsT0FBTztRQUN0QyxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUMsQ0FBQTtJQUVELE9BQU8sRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQztBQUNuRCxDQUFDLENBQUMifQ==