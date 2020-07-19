import * as React from 'react';
import { mount } from 'enzyme';
import { DateInput } from '../DateInput';
import { MONTHS } from '../../../../../consts';

describe('when rendering DateInput component', () => {
  const map: Record<string, any> = {};
  document.addEventListener = jest.fn((event, cb) => {
    map[event] = cb;
  });

  it('renders the correct month based on the month prop', () => {
    const month = 0;
    const year = 2022;
    const value = `${MONTHS[month][year]}`;
    const blockPastDate = true;
    const setMonth = jest.fn();
    const setYear = jest.fn();

    const wrapper = mount(
      <DateInput
        year={year}
        month={month}
        value={value}
        blockPastDate={blockPastDate}
        setMonth={setMonth}
        setYear={setYear}
      />
    );

    expect(wrapper.text()).toContain(MONTHS[month]);
  });

  it('renders the correct year based on the year prop', () => {
    const month = 0;
    const year = 2022;
    const value = `${MONTHS[month][year]}`;
    const blockPastDate = true;
    const setMonth = jest.fn();
    const setYear = jest.fn();

    const wrapper = mount(
      <DateInput
        year={year}
        month={month}
        value={value}
        blockPastDate={blockPastDate}
        setMonth={setMonth}
        setYear={setYear}
      />
    );

    expect(wrapper.text()).toContain(year);
  });

  it('sets a forward month when pressing the right arrow key', () => {
    const month = 4;
    const year = 2022;
    const value = `${MONTHS[month][year]}`;
    const blockPastDate = true;
    const setMonth = jest.fn();
    const setYear = jest.fn();

    mount(
      <DateInput
        year={year}
        month={month}
        value={value}
        blockPastDate={blockPastDate}
        setMonth={setMonth}
        setYear={setYear}
      />
    );

    map.keydown({ keyCode: 39 });

    expect(setMonth).toBeCalledWith(month + 1);
  });

  it('sets a past month when pressing the left arrow key', () => {
    const month = 4;
    const year = 2022;
    const value = `${MONTHS[month][year]}`;
    const blockPastDate = true;
    const setMonth = jest.fn();
    const setYear = jest.fn();

    mount(
      <DateInput
        year={year}
        month={month}
        value={value}
        blockPastDate={blockPastDate}
        setMonth={setMonth}
        setYear={setYear}
      />
    );

    map.keydown({ keyCode: 37 });

    expect(setMonth).toBeCalledWith(month - 1);
  });

  it('sets a forward month when clicking in the right button', () => {
    const handleClick = jest.fn();
    const month = 4;
    const year = 2022;
    const value = `${MONTHS[month][year]}`;
    const blockPastDate = true;
    const setMonth = jest.fn();
    const setYear = jest.fn();

    const wrapper = mount(
      <DateInput
        year={year}
        month={month}
        value={value}
        blockPastDate={blockPastDate}
        setMonth={setMonth}
        setYear={setYear}
      />
    );

    wrapper.find('[data-testid="right-button"]').simulate('click');

    expect(handleClick).toBeCalledWith(month + 1);
  });

  it('sets a past month when clicking in the left button', () => {
    const handleClick = jest.fn();
    const month = 4;
    const year = 2022;
    const value = `${MONTHS[month][year]}`;
    const blockPastDate = true;
    const setMonth = jest.fn();
    const setYear = jest.fn();

    const wrapper = mount(
      <DateInput
        year={year}
        month={month}
        value={value}
        blockPastDate={blockPastDate}
        setMonth={setMonth}
        setYear={setYear}
      />
    );

    wrapper.find('[data-testid="left-button"]').simulate('click');

    expect(handleClick).toBeCalledWith(month - 1);
  });
});
