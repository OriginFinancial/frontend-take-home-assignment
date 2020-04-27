import React from 'react';
import { mount } from 'enzyme';

import DateInput from './index';
import { months } from '../../utils/date';

describe('<DateInput />', () => {
  // eslint-disable-next-line
  const map: Record<string, any> = {};
  document.addEventListener = jest.fn((event, cb) => {
    map[event] = cb;
  });

  const testClass = 'testClass';
  it('set external className', () => {
    const wrapper = mount(
      <DateInput
        year={2020}
        month={0}
        setMonth={jest.fn()}
        setYear={jest.fn()}
        className={testClass}
      />
    );
    expect(wrapper.hasClass(testClass)).toBe(true);
  });

  it('renders the correct month based on the month prop', () => {
    const month = 0;
    const wrapper = mount(
      <DateInput
        year={2020}
        month={month}
        setMonth={jest.fn()}
        setYear={jest.fn()}
      />
    );

    expect(wrapper.text()).toContain(months[month]);
  });

  it('renders the correct year based on the year prop', () => {
    const year = 2020;
    const wrapper = mount(
      <DateInput
        year={year}
        month={0}
        setMonth={jest.fn()}
        setYear={jest.fn()}
      />
    );

    expect(wrapper.text()).toContain(year);
  });

  it('calls setMonth with next month on right arrow keyboard event', () => {
    const setMonthMock = jest.fn();
    const month = 0;
    mount(
      <DateInput
        year={2020}
        month={month}
        setMonth={setMonthMock}
        setYear={jest.fn()}
      />
    );

    map.keydown({ keyCode: 39 });

    expect(setMonthMock).toBeCalledWith(month + 1);
  });

  it('calls setMonth with previous month on left arrow keyboard event', () => {
    const setMonthMock = jest.fn();
    const month = 1;
    mount(
      <DateInput
        year={2020}
        month={month}
        setMonth={setMonthMock}
        setYear={jest.fn()}
      />
    );

    map.keydown({ keyCode: 37 });

    expect(setMonthMock).toBeCalledWith(month - 1);
  });

  it('calls setMonth with first month when the current month is the last on right arrow keyboard event', () => {
    const setMonthMock = jest.fn();
    const month = months.length - 1;
    mount(
      <DateInput
        year={2020}
        month={month}
        setMonth={setMonthMock}
        setYear={jest.fn()}
      />
    );

    map.keydown({ keyCode: 39 });

    expect(setMonthMock).toBeCalledWith(month % (months.length - 1));
  });

  it('calls setMonth with the last month when the current month is the first on left arrow keyboard event', () => {
    const setMonthMock = jest.fn();
    const month = 0;
    mount(
      <DateInput
        year={2020}
        month={month}
        setMonth={setMonthMock}
        setYear={jest.fn()}
      />
    );

    map.keydown({ keyCode: 37 });

    expect(setMonthMock).toBeCalledWith(months.length - 1);
  });

  it('calls setYear with next year when the current month is the last on right arrow keyboard event', () => {
    const setYearMock = jest.fn();
    const month = months.length - 1;
    const year = 2020;
    mount(
      <DateInput
        year={year}
        month={month}
        setMonth={jest.fn()}
        setYear={setYearMock}
      />
    );

    map.keydown({ keyCode: 39 });

    expect(setYearMock).toBeCalledWith(year + 1);
  });

  it('calls setYear with previous year when the current month is the first on left arrow keyboard event', () => {
    const setYearMock = jest.fn();
    const month = 0;
    const year = 2020;
    mount(
      <DateInput
        year={year}
        month={month}
        setMonth={jest.fn()}
        setYear={setYearMock}
      />
    );

    map.keydown({ keyCode: 37 });

    expect(setYearMock).toBeCalledWith(year - 1);
  });
});
