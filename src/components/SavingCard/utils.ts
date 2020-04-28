export const getMonthlyPayment = (monthsToPay: number, value: number): number =>
  monthsToPay === 0 || value === 0
    ? null
    : Number((value / monthsToPay).toFixed(0));
