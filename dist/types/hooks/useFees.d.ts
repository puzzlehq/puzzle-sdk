import { Asset } from '../data/asset.js';
export interface Fee {
    label: string;
    speed: string;
    ethFee: Asset;
    daiFee: Asset;
}
export declare const usePuzzleFees: () => {
    loading: boolean;
    error?: string;
    fees?: Fee[];
};
