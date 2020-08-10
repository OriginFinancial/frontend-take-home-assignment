import * as React from 'react';
import { shallow } from 'enzyme';
import DateInput from '../../src/components/DateInput';

describe('DatePicker', () => {
  it('should render', () => {
    const handleChange = jest.fn();
    const component = shallow(<DateInput value={new Date()} onChange={handleChange} />);
    expect(component.exists()).toEqual(true);
  });

  it('should call onChange when click button', () => {
    const handleChange = jest.fn();
    const component = shallow(<DateInput value={new Date()} onChange={handleChange} />);
    component
    .find('rightbtn')
    .simulate('click');

    expect(handleChange).toBeCalled();
  });
});