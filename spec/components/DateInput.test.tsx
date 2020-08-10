import * as React from 'react';
import { mount } from 'enzyme';
import DateInput from '../../src/components/DateInput';

describe('DatePicker', () => {
  it('should render and show labels', () => {
    const handleChange = jest.fn();
    const component = mount(<DateInput value={new Date(2020, 1, 1)} onChange={handleChange} />);
    expect(component.exists()).toEqual(true);
    expect(component.find('InputLabel').text()).toEqual("Reach goal by")
    expect(component.find('Month').text()).toEqual("February")
    expect(component.find('Year').text()).toEqual("2020")
  });

  it('should call onChange when click button', () => {
    const handleChange = jest.fn();
    const component = mount(<DateInput value={new Date()} onChange={handleChange} />);
    component
    .find('rightbtn')
    .simulate('click');

    expect(handleChange).toBeCalled();
  });

  it('should call onChange when press arrow keys', () => {
    const map: Record<string, any> = {};
    document.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });
    const handleChange = jest.fn();
    mount(<DateInput value={new Date()} onChange={handleChange} />);
    map.keydown({ key: 'ArrowRight' });
    expect(handleChange).toBeCalled();
    map.keydown({ key: 'ArrowLeft' });
    expect(handleChange).toBeCalled();
  });
});