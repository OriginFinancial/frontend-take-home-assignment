import {
  currencyFormatter,
  monthFormatter,
  yearFormatter
} from '../../src/helpers/formatters';

describe('Formatters', () => {
  it('should format currency', () => {
    const formattedValue = currencyFormatter(25000);

    expect(formattedValue).toEqual('25,000');
  });

  it('should format month', () => {
    const date = new Date(new Date().setMonth(0));
    const formattedValue = monthFormatter(date);

    expect(formattedValue).toEqual('January');
  });

  it('should format year', () => {
    const date = new Date(new Date().setFullYear(2020));
    const formattedValue = yearFormatter(date);

    expect(formattedValue).toEqual('2020');
  });
});
