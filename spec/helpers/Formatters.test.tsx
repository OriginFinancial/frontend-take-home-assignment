import {currencyFormatter, parseDateToString} from '../../src/helpers/formatters';

describe('Currency Formatter', () => {
  it('should format to USD value', () => {
    expect(currencyFormatter(12.3)).toEqual("$12.30");
    expect(currencyFormatter(123)).toEqual("$123.00");
    expect(currencyFormatter(12345)).toEqual("$12,345.00");
    expect(currencyFormatter(12345.4)).toEqual("$12,345.40");
    expect(currencyFormatter(1234567.45)).toEqual("$1,234,567.45");
  });
});

describe('Date parser', () => {
  it('should return only month', () => {
    let date: Date = new Date(2020, 0, 1);
    expect(parseDateToString(date, true, false)).toEqual("January");
    date = new Date(2020, 1, 1);
    expect(parseDateToString(date, true, false)).toEqual("February");
    date = new Date(2020, 2, 1);
    expect(parseDateToString(date, true, false)).toEqual("March");
  });
  
  it('should return only year', () => {
    let date: Date = new Date(2020, 0, 1);
    expect(parseDateToString(date, false, true)).toEqual("2020");
    date = new Date(2021, 1, 1);
    expect(parseDateToString(date, false, true)).toEqual("2021");
    date = new Date(2022, 2, 1);
    expect(parseDateToString(date, false, true)).toEqual("2022");
  });

  it('should return month and year', () => {
    let date: Date = new Date(2020, 0, 1);
    expect(parseDateToString(date, true, true)).toEqual("January 2020");
    date = new Date(2021, 1, 1);
    expect(parseDateToString(date, true, true)).toEqual("February 2021");
    date = new Date(2022, 2, 1);
    expect(parseDateToString(date, true, true)).toEqual("March 2022");
  });
});