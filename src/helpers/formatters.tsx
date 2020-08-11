export const currencyFormatter = (value: number): string => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
    minimumFractionDigits: 2
  });

  return formatter.format(value).toString();
};

export const parseDateToString = (date: Date, month: Boolean, year: Boolean): string => {
  if (date && month && year) {
    return date.toLocaleString('default', {
      month: 'long',
      year: 'numeric'
    })
  } else if (date && month && !year) {
    return date.toLocaleString('default', {
      month: 'long',
    })
  } else {
    return date.toLocaleString('default', {
      year: 'numeric'
    })
  }
}
