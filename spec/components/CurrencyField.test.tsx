import * as React from 'react';
import { mount } from 'enzyme';
import CurrencyField from '../../src/components/CurrencyField';

describe('CurrencyField', () => {
  it('should render', () => {
    const handleChange = jest.fn();
    const component = mount(<CurrencyField value={123564.56} onChange={handleChange}/>);
    expect(component.exists()).toEqual(true);
    expect(component.find('span').text()).toEqual("Total Amount")
  });

  it('should call on change', () => {
    const handleChange = jest.fn();
    const component = mount(<CurrencyField value={123564.56} onChange={handleChange}/>);
    expect(component.exists()).toEqual(true); 
    const input = component.find('currencyinput'); 
    input.simulate('change', '123,123.00');
    expect(handleChange).toBeCalled();
  });

  it('should show formatted value', () => {
    const component = mount(<CurrencyField value={123564.56}/>);
    const input = component.find('input'); 
    expect(input.prop('value')).toEqual("123,564.56")
  });
});