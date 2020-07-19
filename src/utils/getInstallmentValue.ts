const getInstallmentValue = (
  totalMonths: number,
  totalAmount: number
): number =>
  totalMonths === 0 || Number(totalAmount) === 0
    ? null
    : Math.round(Number(totalAmount / totalMonths));

export { getInstallmentValue };
