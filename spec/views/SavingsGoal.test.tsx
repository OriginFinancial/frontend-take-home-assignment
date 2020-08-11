import * as React from 'react';
import { mount } from 'enzyme';
import SavingsGoal from '../../src/views/SavingGoal';
import CurrencyField from '../../src/components/CurrencyField';
import DateInput from '../../src/components/DateInput';

describe('Savings Goal Page', () => {
  it('renders savings container', () => {
    const component = mount(<SavingsGoal />);
    expect(component.find("ContainerTitle").text()).toEqual('Buy a house');
    expect(component.find("ConfirmButton").exists()).toEqual(true);
    expect(component.find(CurrencyField).exists()).toEqual(true);
    expect(component.find(DateInput).exists()).toEqual(true);
  });
});
