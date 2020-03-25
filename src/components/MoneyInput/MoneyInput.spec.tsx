import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import MoneyInput from './index';
import { Input } from './styles';

describe('<MoneyInput />', () => {
  let setState: jest.Mock;
  let moneyInput: ReactWrapper;

  beforeEach(() => {
    setState = jest.fn();
    moneyInput = mount(<MoneyInput id="total-amount" label="Total amount" setAmount={setState} />);
  });

  it('Renders without crashing', () => {
    expect(moneyInput).toBeTruthy();
  });

  it('Should call setAmout', () => {
    moneyInput.find(Input).simulate('change');

    expect(setState).toBeCalledTimes(1);
  });
});
