/**
 * Converts the value to a decimal string representation with the given precision.
 * The digits outside the precision are simply discarded (i.e. the result is floored).
 * This ensures we never report more funds than actually exists.
 * Trailing 0's are also removed.
 * @param value to convert to string
 * @param decimals the number of least significant digits of value that represent the decimal
 * @param precision the number of decimal places to return
 */
export declare function fromBaseUnits(value: bigint, decimals: number, precision?: number): string;
/**
 * Converts the value from a decimal string to bigint value.
 * @param valueString to convert to bigint
 * @param decimals the number of least significant digits of value that represent the decimal
 */
export declare function toBaseUnits(valueString: string, decimals: number): bigint;
export declare enum AssetType {
    ETH = 0,
    DAI = 1
}
export declare class Asset {
    type: AssetType;
    id: number;
    symbol: string;
    coinMarketCapID: string;
    value: bigint;
    constructor(type: AssetType, value: bigint);
    getDisplayValue: () => string;
}
//# sourceMappingURL=asset.d.ts.map