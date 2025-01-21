export const shortenAddress = (address, aleo = true, length = 4, short = true) => {
    if (!address)
        return '';
    if (address.length < length)
        return address;
    if (short) {
        return `(...${address.slice(-length)})`;
    }
    if (address.length < length * 2)
        return address;
    return `${address.slice(0, length + (aleo ? 'aleo1'.length : 0))}...${address.slice(address.length - length, address.length)}`;
};
