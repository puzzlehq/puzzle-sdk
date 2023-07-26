import { jsx as _jsx } from "react/jsx-runtime";
import { WalletConnectModalSign } from '@walletconnect/modal-sign-react';
import { projectId, web3modal_puzzle_props } from './data/walletconnect.js';
export const PuzzleWeb3Modal = ({ dAppName, dAppDescription, dAppUrl, dAppIconURL }) => {
    return (_jsx(WalletConnectModalSign, { projectId: projectId, metadata: {
            name: dAppName,
            description: dAppDescription,
            url: dAppUrl,
            icons: [
                dAppIconURL
            ],
        }, modalOptions: { ...web3modal_puzzle_props } }));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViM21vZGFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3dlYjNtb2RhbC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxTQUFTLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQVM1RSxNQUFNLENBQUMsTUFBTSxlQUFlLEdBQUcsQ0FBQyxFQUFHLFFBQVEsRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBUSxFQUFFLEVBQUU7SUFDNUYsT0FBTyxDQUNMLEtBQUMsc0JBQXNCLElBQ3JCLFNBQVMsRUFBRSxTQUFTLEVBQ3BCLFFBQVEsRUFBRTtZQUNSLElBQUksRUFBRSxRQUFRO1lBQ2QsV0FBVyxFQUFFLGVBQWU7WUFDNUIsR0FBRyxFQUFFLE9BQU87WUFDWixLQUFLLEVBQUU7Z0JBQ0wsV0FBVzthQUNaO1NBQ0YsRUFDRCxZQUFZLEVBQUUsRUFBRSxHQUFHLHNCQUFzQixFQUFFLEdBQzNDLENBQ0gsQ0FBQztBQUNKLENBQUMsQ0FBQyJ9