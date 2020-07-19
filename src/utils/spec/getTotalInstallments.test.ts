import { getTotalInstallments } from '../getTotalInstallments';

describe('when receiving selected year and month', () => {
  it('returns the total installments', () => {
    const year = 2022;
    const month = 11;

    expect(getTotalInstallments(year, month)).toBe(29);
  });
});

describe('when receiving a past year', () => {
  it('returns null', () => {
    const year = 2018;
    const month = 11;

    expect(getTotalInstallments(year, month)).toBeNull();
  });
});
