import {currencyFormatter} from '../../src/helpers/formatters';

describe('Currency Formatter', () => {
  it('should format to USD value', () => {
    expect(currencyFormatter(12.3)).toEqual("$12.30");
    expect(currencyFormatter(123)).toEqual("$123.00");
    expect(currencyFormatter(12345)).toEqual("$12,345.00");
    expect(currencyFormatter(12345.4)).toEqual("$12,345.40");
    expect(currencyFormatter(1234567.45)).toEqual("$1,234,567.45");
  });
});