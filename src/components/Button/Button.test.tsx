import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { ChildrenProps } from '../../models';
import Button from './Button';

describe('Button component', () => {
  let component: ReactWrapper;
  let props: ChildrenProps;

  beforeEach(() => {
    jest.clearAllMocks();
    component = mount(<Button {...props}>Confirm</Button>);
  });

  it('renders initial layout', () => {
    expect(component.getElements()).toMatchSnapshot();
  });

  it('renders "Confirm" text passed as children', () => {
    expect(component.find('button').text()).toBe('Confirm');
  });
});
