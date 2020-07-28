export const currencyFormatter = (value: number): string => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    currencyDisplay: 'code',
    minimumFractionDigits: 0
  });

  const formattedValue = formatter.format(value);
  const valueWithoutSymbol = formattedValue.replace(/[a-z]{3}/i, '').trim();

  return valueWithoutSymbol;
};

export const monthFormatter = (date: Date): string => {
  return date.toLocaleDateString('en-US', { month: 'long' });
};

export const yearFormatter = (date: Date): string => {
  return date.toLocaleDateString('en-US', { year: 'numeric' });
};
