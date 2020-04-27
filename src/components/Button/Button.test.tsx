import React from 'react';
import { shallow, mount } from 'enzyme';

import Button from './index';

describe('<Button />', () => {
  it('renders a html button', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.exists('button')).toBeDefined();
  });

  it('renders children as button content', () => {
    const testStr = 'Test';
    const wrapper = mount(<Button>{testStr}</Button>);
    const button = wrapper.find('button').text();
    expect(button).toBe(testStr);
  });

  it('calls onClick handle on click event', () => {
    const onButtonClick = jest.fn();
    const wrapper = mount(<Button onClick={onButtonClick}></Button>);
    wrapper.find('button').simulate('click');
    expect(onButtonClick).toHaveBeenCalledTimes(1);
  });

  it('set external className', () => {
    const testClass = 'testClass';
    const wrapper = mount(<Button className={testClass}></Button>);
    expect(wrapper.hasClass(testClass)).toBe(true);
  });
});
