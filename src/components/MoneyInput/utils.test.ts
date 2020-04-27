import { toCurrency } from './utils';

describe('MoneyInput/utils.ts', () => {
  describe('toCurrency', () => {
    it('should return formatted value without thousand separator', () => {
      expect(toCurrency(500)).toBe('500');
      expect(toCurrency(50)).toBe('50');
      expect(toCurrency(5)).toBe('5');
    });

    it('should return formatted value with thousand separator', () => {
      expect(toCurrency(5000)).toBe('5,000');
      expect(toCurrency(50000)).toBe('50,000');
      expect(toCurrency(500000)).toBe('500,000');
    });

    it('should return formatted value with currency symbol', () => {
      expect(toCurrency(5000, false)).toBe('$5,000');
      expect(toCurrency(50000, false)).toBe('$50,000');
      expect(toCurrency(500000, false)).toBe('$500,000');
    });
  });
});
