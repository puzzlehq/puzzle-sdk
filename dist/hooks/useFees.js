import { useEffect, useState } from 'react';
export const usePuzzleFees = () => {
    const [status, setStatus] = useState({
        loading: true,
    });
    // TODO: implement or remove
    useEffect(() => {
        (async () => {
            //const data = await trpc.getFees.query();
            // const labels = ['Next rollup', 'Instant'];
            // const speeds = ['A few hours', 'A few minutes'];
            // const fees = [0, 1].map((settlementTime) => {
            //   return {
            //     label: labels[settlementTime],
            //     speed: speeds[settlementTime],
            //     ethFee: new Asset(
            //       AssetType.ETH,
            //       data.ethFees[0][settlementTime].value
            //     ),
            //     daiFee: new Asset(
            //       AssetType.DAI,
            //       data.daiFees[1][settlementTime].value
            //     ),
            //   } as Fee;
            // });
            // setStatus({ fees, loading: false });
        })();
    }, []);
    return { ...status };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlRmVlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ob29rcy91c2VGZWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBVTVDLE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRyxHQUFHLEVBQUU7SUFDaEMsTUFBTSxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsR0FBRyxRQUFRLENBSWpDO1FBQ0QsT0FBTyxFQUFFLElBQUk7S0FDZCxDQUFDLENBQUM7SUFFSCw0QkFBNEI7SUFDNUIsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNiLENBQUMsS0FBSyxJQUFJLEVBQUU7WUFDViwwQ0FBMEM7WUFDMUMsNkNBQTZDO1lBQzdDLG1EQUFtRDtZQUNuRCxnREFBZ0Q7WUFDaEQsYUFBYTtZQUNiLHFDQUFxQztZQUNyQyxxQ0FBcUM7WUFDckMseUJBQXlCO1lBQ3pCLHVCQUF1QjtZQUN2Qiw4Q0FBOEM7WUFDOUMsU0FBUztZQUNULHlCQUF5QjtZQUN6Qix1QkFBdUI7WUFDdkIsOENBQThDO1lBQzlDLFNBQVM7WUFDVCxjQUFjO1lBQ2QsTUFBTTtZQUNQLHVDQUF1QztRQUN4QyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ1AsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsT0FBTyxFQUFFLEdBQUcsTUFBTSxFQUFFLENBQUM7QUFDdkIsQ0FBQyxDQUFDIn0=