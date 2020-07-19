import * as React from 'react';
import { mount } from 'enzyme';
import { DepositInput } from '../DepositInput';

describe('when rendering the DepositInput component', () => {
  it('renders correctly', () => {
    const value = 67000;
    const handleChange = jest.fn();

    const wrapper = mount(
      <DepositInput value={value} onChange={handleChange} />
    );

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.exists(`input`)).toBe(true);
  });

  it('changes value when prompted', () => {
    const handleChange = jest.fn();
    const value = 20000;
    const expectedValue = '10,000';

    const wrapper = mount(
      <DepositInput value={value} onChange={handleChange} />
    );

    wrapper
      .find('input')
      .simulate('change', { target: { value: expectedValue } });

    expect(handleChange).toBeCalled();
    expect(wrapper.find('input').contains(expectedValue));
  });
});
