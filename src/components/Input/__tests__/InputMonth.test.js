import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import dayjs from 'dayjs';
import { InputMonth } from '../InputMonth';

const DATE_FORMAT = 'MMMM YYYY';

describe('Component: InputMonth', function() {
  test('renders the formated reach date', function() {
    const { getByTestId } = render(<InputMonth setReach={() => {}} />);

    const formatedDate = getByTestId('formated-reach-date');

    expect(formatedDate).toHaveValue(dayjs().format(DATE_FORMAT));
  });

  test('renders decremented reach date', () => {
    const { getByTestId } = render(<InputMonth setReach={() => {}} />);
    const decrementBtn = getByTestId('decrement-date');

    fireEvent.click(decrementBtn);

    const formatedDate = getByTestId('formated-reach-date');

    const verifyDate = dayjs().subtract(1, 'month');
    expect(formatedDate).toHaveValue(verifyDate.format(DATE_FORMAT));
  });

  test('renders incremented reach date', () => {
    const { getByTestId } = render(<InputMonth setReach={() => {}} />);
    const incrementBtn = getByTestId('increment-date');

    fireEvent.click(incrementBtn);

    const formatedDate = getByTestId('formated-reach-date');

    const verifyDate = dayjs().add(1, 'month');
    expect(formatedDate).toHaveValue(verifyDate.format(DATE_FORMAT));
  });

  test('sets the input reach date', () => {
    let reachDate = '';

    const { getByTestId } = render(
      <InputMonth setReach={value => (reachDate = value)} />
    );
    const incrementBtn = getByTestId('increment-date');
    fireEvent.click(incrementBtn);

    const verifyDate = dayjs().add(1, 'month');
    expect(reachDate.format(DATE_FORMAT)).toBe(verifyDate.format(DATE_FORMAT));
  });
});
