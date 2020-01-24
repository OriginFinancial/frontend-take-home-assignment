import React from 'react';
import { render } from '@testing-library/react';
import { Calculator } from '../Calculator';
import dayjs from 'dayjs';

describe('Page: Calculator', function() {
  function setup() {
    const amount = 1000;
    const reachDate = dayjs().add(2, 'month');

    return {
      amount,
      reachDate
    };
  }

  test('renders the saving amount per month', function() {
    const { amount, reachDate } = setup();

    const { getByTestId } = render(
      <Calculator amount={amount} reachDate={reachDate} />
    );

    const saving = getByTestId('saving-amount');

    expect(saving).toHaveTextContent('$500');
  });

  test('renders the amount of monthly deposits', () => {
    const { amount, reachDate } = setup();

    const { getByTestId } = render(
      <Calculator amount={amount} reachDate={reachDate} />
    );

    const deposits = getByTestId('resume-deposits');

    expect(deposits).toHaveTextContent('2 monthly deposits');
  });

  test('renders the amount goal', () => {
    const { amount, reachDate } = setup();

    const { getByTestId } = render(
      <Calculator amount={amount} reachDate={reachDate} />
    );

    const goalAmount = getByTestId('resume-goal-amount');

    expect(goalAmount).toHaveTextContent('$ 1000');
  });

  test('renders the formated reach date', () => {
    const { amount, reachDate } = setup();

    const { getByTestId } = render(
      <Calculator amount={amount} reachDate={reachDate} />
    );

    const reach = getByTestId('resume-reach');

    expect(reach).toHaveTextContent(reachDate.format('MMMM YYYY'));
  });
});
