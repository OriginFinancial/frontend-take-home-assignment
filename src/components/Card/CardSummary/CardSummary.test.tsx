import React from 'react';
import { mount } from 'enzyme';

import CardSummary from './index';

describe('<CardSummary />', () => {
  it('renders the correct value formatted', () => {
    const wrapper = mount(<CardSummary value={10000} />);
    expect(wrapper.text()).toContain('$10,000');
  });

  it('renders the children', () => {
    const testId = 'children';
    const wrapper = mount(
      <CardSummary value={0}>
        <span data-testid={testId}></span>;
      </CardSummary>
    );
    expect(wrapper.exists(`[data-testid="${testId}"]`)).toBe(true);
  });

  it('set external className', () => {
    const testClass = 'testClass';
    const wrapper = mount(<CardSummary value={0} className={testClass} />);
    expect(wrapper.hasClass(testClass)).toBe(true);
  });
});
