import { getInstallmentValue } from '../getInstallmentValue';

describe('when receiving total months and total planned amount', () => {
  it('returns installment value', () => {
    const value1 = 47;
    const value2 = 20000;

    expect(getInstallmentValue(value1, value2)).toBe(426);
  });
});

describe('when receiving zero total months and zero total planned amount', () => {
  it('returns null', () => {
    const value1 = 0;
    const value2 = 0;

    expect(getInstallmentValue(value1, value2)).toBeNull();
  });
});
