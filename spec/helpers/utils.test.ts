import { monthDiff } from '../../src/helpers/utils';

describe('Utils', () => {
  it('should output months diff', () => {
    const d1 = new Date(new Date().setMonth(0));
    const d2 = new Date(new Date().setMonth(11));

    const formattedValue = monthDiff(d2, d1);

    expect(formattedValue).toEqual(11);
  });
});
