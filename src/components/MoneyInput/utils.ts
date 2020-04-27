export const toCurrency = (
  value: number,
  removeCurrencySymbol = true
): string => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    currencyDisplay: removeCurrencySymbol ? 'code' : 'symbol',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0
  });

  const formattedValue = formatter.format(value);
  const valueWithoutSymbol = formattedValue.replace(/[a-z]{3}/i, '').trim();
  return removeCurrencySymbol ? valueWithoutSymbol : formattedValue;
};
