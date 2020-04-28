import React from 'react';
import { mount } from 'enzyme';

import Header from './index';

describe('<Header />', () => {
  it('renders a img tag', () => {
    const wrapper = mount(<Header />);
    expect(wrapper.exists('img')).toBe(true);
  });
});
