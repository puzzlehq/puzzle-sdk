export const shortenAddress = (
  address?: string,
  aleo: boolean = true,
  length: number = 4,
  short: boolean = true,
) => {
  if (!address) return '';
  if (address.length < length) return address;
  if (short) {
    return `(...${address.slice(-length)})`;
  }
  if (address.length < length * 2) return address;
  return `${address.slice(
    0,
    length + (aleo ? 'aleo1'.length : 0),
  )}...${address.slice(address.length - length, address.length)}`;
};
