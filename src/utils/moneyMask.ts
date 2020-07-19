const moneyMask = (value: number): string => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0
  });

  return formatter
    .format(value)
    .toString()
    .replace(/\$/, '');
};

export { moneyMask };
