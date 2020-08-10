import * as React from 'react';
import { shallow } from 'enzyme';
import CurrencyField from '../../src/components/CurrencyField';

describe('CurrencyField', () => {
  it('should render', () => {
    const handleChange = jest.fn();
    const component = shallow(<CurrencyField value={123564.56} />);
    expect(component.exists()).toEqual(true);
  });

  it('should render with currency format', () => {
    //TODO Test to see if the format is right. Look up online 
  });
});