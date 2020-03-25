import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Button from './index';

describe('<Button />', () => {
  let button: ShallowWrapper;

  beforeEach(() => {
    button = shallow(<Button text="Ok" />);
  });

  it('Renders without crashing', () => {
    expect(button).toBeTruthy();
  });

  it('Renders with "Ok" text', () => {
    expect(button.text()).toEqual('Ok');
  });
});
