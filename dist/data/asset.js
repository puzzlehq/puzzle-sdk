/**
 * Converts the value to a decimal string representation with the given precision.
 * The digits outside the precision are simply discarded (i.e. the result is floored).
 * This ensures we never report more funds than actually exists.
 * Trailing 0's are also removed.
 * @param value to convert to string
 * @param decimals the number of least significant digits of value that represent the decimal
 * @param precision the number of decimal places to return
 */
export function fromBaseUnits(value, decimals, precision = decimals) {
    const neg = value < BigInt(0);
    const valStr = value
        .toString()
        .slice(neg ? 1 : 0)
        .padStart(decimals + 1, '0');
    const integer = valStr.slice(0, valStr.length - decimals);
    const fractionalTrim = valStr.slice(-decimals);
    let end = fractionalTrim.length - 1;
    while (fractionalTrim[end] === '0')
        --end;
    const fractional = fractionalTrim.slice(0, end + 1);
    return ((neg ? '-' : '') +
        (fractional ? `${integer}.${fractional.slice(0, precision)}` : integer));
}
/**
 * Converts the value from a decimal string to bigint value.
 * @param valueString to convert to bigint
 * @param decimals the number of least significant digits of value that represent the decimal
 */
export function toBaseUnits(valueString, decimals) {
    const [integer, decimal] = valueString.split('.');
    const fractional = (decimal || '').replace(/0+$/, '').slice(0, decimals);
    const scalingFactor = BigInt(10) ** BigInt(decimals);
    const fractionalScale = scalingFactor / BigInt(10) ** BigInt(fractional.length || 0);
    return (BigInt(fractional || 0) * fractionalScale +
        BigInt(integer || 0) * scalingFactor);
}
export var AssetType;
(function (AssetType) {
    AssetType[AssetType["ETH"] = 0] = "ETH";
    AssetType[AssetType["DAI"] = 1] = "DAI";
})(AssetType = AssetType || (AssetType = {}));
function getAssetDetails(type) {
    switch (type) {
        case AssetType.ETH:
            return {
                id: 0,
                symbol: 'ETH',
                coinMarketCapID: '1027',
            };
        case AssetType.DAI:
            return {
                id: 1,
                symbol: 'DAI',
                coinMarketCapID: '4943',
            };
    }
}
export class Asset {
    constructor(type, value) {
        this.getDisplayValue = () => {
            return fromBaseUnits(this.value, 18) + ' ' + this.symbol;
        };
        this.type = type;
        const { id, symbol, coinMarketCapID } = getAssetDetails(type);
        this.id = id;
        this.symbol = symbol;
        this.coinMarketCapID = coinMarketCapID;
        this.value = value;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGF0YS9hc3NldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7R0FRRztBQUNILE1BQU0sVUFBVSxhQUFhLENBQzNCLEtBQWEsRUFDYixRQUFnQixFQUNoQixZQUFvQixRQUFRO0lBRTVCLE1BQU0sR0FBRyxHQUFHLEtBQUssR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUIsTUFBTSxNQUFNLEdBQUcsS0FBSztTQUNqQixRQUFRLEVBQUU7U0FDVixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNsQixRQUFRLENBQUMsUUFBUSxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUMvQixNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFDO0lBQzFELE1BQU0sY0FBYyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMvQyxJQUFJLEdBQUcsR0FBRyxjQUFjLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNwQyxPQUFPLGNBQWMsQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHO1FBQUUsRUFBRSxHQUFHLENBQUM7SUFDMUMsTUFBTSxVQUFVLEdBQUcsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3BELE9BQU8sQ0FDTCxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDaEIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxJQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUN4RSxDQUFDO0FBQ0osQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsV0FBVyxDQUFDLFdBQW1CLEVBQUUsUUFBZ0I7SUFDL0QsTUFBTSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2xELE1BQU0sVUFBVSxHQUFHLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN6RSxNQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JELE1BQU0sZUFBZSxHQUNuQixhQUFhLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQy9ELE9BQU8sQ0FDTCxNQUFNLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQyxHQUFHLGVBQWU7UUFDekMsTUFBTSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsR0FBRyxhQUFhLENBQ3JDLENBQUM7QUFDSixDQUFDO0FBRUQsTUFBTSxDQUFOLElBQVksU0FHWDtBQUhELFdBQVksU0FBUztJQUNuQix1Q0FBRyxDQUFBO0lBQ0gsdUNBQUcsQ0FBQTtBQUNMLENBQUMsRUFIVyxTQUFTLEdBQVQsU0FBUyxLQUFULFNBQVMsUUFHcEI7QUFFRCxTQUFTLGVBQWUsQ0FBQyxJQUFlO0lBS3RDLFFBQVEsSUFBSSxFQUFFO1FBQ1osS0FBSyxTQUFTLENBQUMsR0FBRztZQUNoQixPQUFPO2dCQUNMLEVBQUUsRUFBRSxDQUFDO2dCQUNMLE1BQU0sRUFBRSxLQUFLO2dCQUNiLGVBQWUsRUFBRSxNQUFNO2FBQ3hCLENBQUM7UUFDSixLQUFLLFNBQVMsQ0FBQyxHQUFHO1lBQ2hCLE9BQU87Z0JBQ0wsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsZUFBZSxFQUFFLE1BQU07YUFDeEIsQ0FBQztLQUNMO0FBQ0gsQ0FBQztBQUVELE1BQU0sT0FBTyxLQUFLO0lBT2hCLFlBQVksSUFBZSxFQUFFLEtBQWE7UUFTMUMsb0JBQWUsR0FBRyxHQUFHLEVBQUU7WUFDckIsT0FBTyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMzRCxDQUFDLENBQUM7UUFWQSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixNQUFNLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsR0FBRyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztRQUN2QyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0NBS0YifQ==