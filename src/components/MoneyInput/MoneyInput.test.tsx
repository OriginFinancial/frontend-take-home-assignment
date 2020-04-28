import React from 'react';
import { mount } from 'enzyme';

import MoneyInput from './index';

describe('<MoneyInput />', () => {
  it('set external className', () => {
    const testClass = 'testClass';
    const wrapper = mount(<MoneyInput className={testClass} />);
    expect(wrapper.hasClass(testClass)).toBe(true);
  });

  it('renders an input element', () => {
    const wrapper = mount(<MoneyInput />);
    expect(wrapper.exists(`input`)).toBe(true);
  });

  it('renders value prop as formatted input value', () => {
    const wrapper = mount(<MoneyInput value={10000} />);
    expect(wrapper.find('input').props().value).toBe('10,000');
  });

  it('calls onChange on input change event', () => {
    const changeHandler = jest.fn();
    const wrapper = mount(
      <MoneyInput value={10000} onChange={changeHandler} />
    );
    wrapper.find('input').simulate('change', { target: { value: '9,000' } });
    expect(changeHandler).toBeCalledWith(9000);
  });
});
