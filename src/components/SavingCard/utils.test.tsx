import { getMonthlyPayment } from './utils';

describe('SavingCard/utils.ts', () => {
  describe('getMonthlyPayment', () => {
    it('should return null with first param being 0', () => {
      expect(getMonthlyPayment(0, 99999)).toBeNull();
    });

    it('should return null with second param being 0', () => {
      expect(getMonthlyPayment(9999, 0)).toBeNull();
    });

    it('should return the correct result', () => {
      expect(getMonthlyPayment(20, 10000)).toBe(500);
      expect(getMonthlyPayment(1, 10000)).toBe(10000);
      expect(getMonthlyPayment(3, 5000)).toBe(1667);
    });
  });
});
