import * as React from 'react';
import { shallow } from 'enzyme';
import SavingsGoal from '../../src/views/SavingGoal';

describe('Savings Goal Page', () => {
  it('renders savings container', () => {
    const component = shallow(<SavingsGoal />);
    expect(component.find("ContainerTitle").text()).toEqual('Buy a house');
    expect(component.find("ConfirmButton").text()).toEqual('Confirm');
  });
});
