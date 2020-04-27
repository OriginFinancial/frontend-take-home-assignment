import React from 'react';
import { mount } from 'enzyme';

import ArrowButton from './index';
import { Side } from '../utils';

describe('<ArrowButton />', () => {
  it('should call onClick handle on click event', () => {
    const clickHandler = jest.fn();
    const wrapper = mount(
      <ArrowButton side={Side.left} onClick={clickHandler} />
    );
    wrapper.find('button').simulate('click');
    expect(clickHandler).toBeCalledTimes(1);
  });

  it('should call onClick handle on click event with "left" when side prop is set to left', () => {
    const clickHandler = jest.fn();
    const wrapper = mount(
      <ArrowButton side={Side.left} onClick={clickHandler} />
    );
    wrapper.find('button').simulate('click');
    expect(clickHandler).toBeCalledWith(Side.left);
  });

  it('should call onClick handle on click event with "right" when side prop is set to right', () => {
    const clickHandler = jest.fn();
    const wrapper = mount(
      <ArrowButton side={Side.right} onClick={clickHandler} />
    );
    wrapper.find('button').simulate('click');
    expect(clickHandler).toBeCalledWith(Side.right);
  });

  it('should not call onClick handle on click event when disabled is set to true', () => {
    const clickHandler = jest.fn();
    const wrapper = mount(
      <ArrowButton side={Side.right} onClick={clickHandler} disabled />
    );
    wrapper.find('button').simulate('click');
    expect(clickHandler).toBeCalledTimes(0);
  });
});
