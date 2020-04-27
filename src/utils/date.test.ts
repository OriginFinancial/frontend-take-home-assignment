import { monthsDiffFromToday } from './date';

describe('utils/date.ts', () => {
  describe('monthsDiffFromToday', () => {
    it('should return 0 with the current date', () => {
      const now = new Date();
      expect(monthsDiffFromToday(now.getFullYear(), now.getMonth())).toBe(0);
    });

    it('should return 1 with the a next month date', () => {
      const now = new Date();
      now.setMonth(now.getMonth() + 1);
      expect(monthsDiffFromToday(now.getFullYear(), now.getMonth())).toBe(1);
    });

    it('should return 12 with the a next year date', () => {
      const now = new Date();
      now.setFullYear(now.getFullYear() + 1);
      expect(monthsDiffFromToday(now.getFullYear(), now.getMonth())).toBe(12);
    });

    it('should return -12 with the a previous year date', () => {
      const now = new Date();
      now.setFullYear(now.getFullYear() - 1);
      expect(monthsDiffFromToday(now.getFullYear(), now.getMonth())).toBe(-12);
    });
  });
});
