import { useEffect, useState } from 'react';
import { Asset, AssetType } from '../data/asset.js';

export interface Fee {
  label: string;
  speed: string;
  ethFee: Asset;
  daiFee: Asset;
}

export const usePuzzleFees = () => {
  const [status, setStatus] = useState<{
    loading: boolean;
    error?: string;
    fees?: Fee[];
  }>({
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
