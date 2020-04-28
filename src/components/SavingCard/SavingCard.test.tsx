import React from 'react';
import { mount } from 'enzyme';

import SavingCard from './index';
import Button from '../Button/index';

describe('<SavingCard />', () => {
  it('set external className', () => {
    const testClass = 'testClass';
    const wrapper = mount(
      <SavingCard iconSrc="" iconAlt="" title="" className={testClass} />
    );
    expect(wrapper.hasClass(testClass)).toBe(true);
  });

  it('renders iconSrc as src for an image tag', () => {
    const iconSrc = '/path/to/icon/src';
    const wrapper = mount(<SavingCard iconSrc={iconSrc} iconAlt="" title="" />);
    expect(wrapper.exists(`img[src="${iconSrc}"]`)).toBe(true);
  });

  it('renders iconAlt as alt for an image tag', () => {
    const iconAlt = 'Alt text for icon';
    const wrapper = mount(<SavingCard iconSrc="" iconAlt={iconAlt} title="" />);
    expect(wrapper.exists(`img[alt="${iconAlt}"]`)).toBe(true);
  });

  it('renders title', () => {
    const title = 'Test Card Title';
    const wrapper = mount(<SavingCard iconSrc="" iconAlt="" title={title} />);
    expect(wrapper.text()).toContain(title);
  });

  it('calls onSubmit on <Button /> component click', () => {
    const onSubmit = jest.fn();
    const wrapper = mount(
      <SavingCard iconSrc="" iconAlt="" title="" handleSubmit={onSubmit} />
    );
    wrapper
      .find(Button)
      .find('button')
      .simulate('click');
    expect(onSubmit).toHaveBeenCalled();
  });
});
