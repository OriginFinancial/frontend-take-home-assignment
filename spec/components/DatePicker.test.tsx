import * as React from 'react';
import { shallow } from 'enzyme';
import DatePicker from '../../src/components/shared/DatePicker';

describe('DatePicker', () => {
  it('should render', () => {
    const component = shallow(<DatePicker selectedDate={new Date()} />);

    expect(component.exists()).toEqual(true);
  });
});
