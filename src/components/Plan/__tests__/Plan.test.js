import React from 'react';
import { render } from '@testing-library/react';
import { Plan } from '../Plan';
import dayjs from 'dayjs';

describe('Component: Plan', function() {
  function setup() {
    const amount = 1000;
    const reachDate = dayjs().format('MMMM YYYY');

    return {
      amount,
      reachDate
    };
  }

  test('renders the planned amount', function() {
    const { amount, reachDate } = setup();

    const { getByTestId } = render(
      <Plan amount={amount} reachDate={reachDate} />
    );

    const plannedAmount = getByTestId('planned-amount');

    expect(plannedAmount).toHaveTextContent(`$ `);
  });

  test('renders the planned reach date', function() {
    const { amount, reachDate } = setup();

    const { getByTestId } = render(
      <Plan amount={amount} reachDate={reachDate} />
    );

    const plannedDate = getByTestId('planned-reach-date');

    expect(plannedDate).toHaveTextContent(reachDate);
  });
});
