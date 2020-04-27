export const toCurrency = (value: number): string => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    currencyDisplay: 'code',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0
  });

  const formattedValue = formatter.format(value);
  const valueWithoutSign = formattedValue.replace(/[a-z]{3}/i, '').trim();
  return valueWithoutSign;
};
