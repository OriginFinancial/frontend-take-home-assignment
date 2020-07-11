import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { DatePickerProps } from '../../models';
import DatePicker from './DatePicker';

describe('DatePicker component', () => {
  let component: ReactWrapper;
  let props: DatePickerProps;

  beforeEach(() => {
    jest.clearAllMocks();
    const fn = jest.fn();
    props = {
      data: {
        selectedDate: {
          month: 'August',
          year: 2020
        },
        isPrevButtonDisabled: false
      },
      actions: {
        handlePressNextDate: fn,
        handlePressPreviousDate: fn,
        handlePressKeyboardArrows: fn
      }
    };
    component = mount(<DatePicker {...props} />);
  });

  it('renders initial layout', () => {
    expect(component.getElements()).toMatchSnapshot();
  });

  it('renders the month prop', () => {
    expect(
      component
        .find('#testDateMonth')
        .first()
        .text()
    ).toBe(props.data.selectedDate.month);
  });

  it('renders the year prop', () => {
    expect(
      component
        .find('span#testDateYear')
        .first()
        .text()
    ).toBe(`${props.data.selectedDate.year}`);
  });
});
