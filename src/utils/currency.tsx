export const formatToDollars = (
  value: string,
  style: string = 'decimal'
): string => {
  const stringify = String(value);
  if (!stringify || stringify.length < 1) return '';

  let formattedCurrency;
  const lastCharacter = stringify[stringify.length - 1];
  const countDots = stringify.match(/\./g);

  if (lastCharacter === '.' && countDots.length === 1) {
    formattedCurrency = stringify;
  } else {
    const replaceCommas = stringify.replace(/,/g, '');
    const parseToNumber = Number.parseFloat(replaceCommas);
    const isNotNumber = isNaN(parseToNumber);

    formattedCurrency = isNotNumber
      ? ''
      : new Intl.NumberFormat('en-US', {
          style,
          currency: 'USD',
          maximumFractionDigits: 2
        }).format(parseToNumber);
  }

  return formattedCurrency;
};

export const formatToNumber = (value: string): number => {
  return Number.parseFloat(value.replace(/,/g, ''));
};

export const calcMonthlyAmount = (
  amount: string,
  totalOfMonths: number
): string => {
  const installment = String(formatToNumber(amount) / totalOfMonths);
  return formatToDollars(installment);
};
