import { moneyMask } from '../moneyMask';

describe('when receiving a number value', () => {
  it('returns formatted string value correctly', () => {
    const value1 = 100;
    const value2 = 2000;
    const value3 = 30000;
    const value4 = 400000;
    const value5 = 1000000;

    expect(moneyMask(value1)).toBe('100');
    expect(moneyMask(value2)).toBe('2,000');
    expect(moneyMask(value3)).toBe('30,000');
    expect(moneyMask(value4)).toBe('400,000');
    expect(moneyMask(value5)).toBe('1,000,000');
  });
});
