import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { TextInputProps } from '../../models';
import TextInput from './TextInput';

describe('TextInput component', () => {
  let component: ReactWrapper;
  let props: TextInputProps;

  beforeEach(() => {
    jest.clearAllMocks();
    const handleChange = jest.fn();
    props = {
      value: '1,000',
      label: 'Total amount',
      handleChange
    };
    component = mount(<TextInput {...props} />);
  });

  it('renders initial layout', () => {
    expect(component.getElements()).toMatchSnapshot();
  });

  it('renders the label prop', () => {
    expect(component.find('label').text()).toBe(props.label);
  });

  it('changes the value when handleChange is called', () => {
    expect(
      component
        .find('input#numberInput')
        .simulate('change', {
          currentTarget: { value: '1,000' }
        })
        .props().value
    ).toBe('1,000');
  });
});
