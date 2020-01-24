import React from 'react';
import { render } from '@testing-library/react';
import { SavingInput } from '../SavingInput';

describe('Component: SavingInput', function() {
  function setup() {
    const setAmount = () => {};
    const setReach = () => {};

    return { setAmount, setReach };
  }

  test('renders the amount input component', function() {
    const { setAmount, setReach } = setup();

    const { getByTestId } = render(
      <SavingInput setAmount={setAmount} setReach={setReach} />
    );

    const inputAmount = getByTestId('input-amount');

    expect(inputAmount).toBeInTheDocument();
  });

  test('renders the month input component', function() {
    const { setAmount, setReach } = setup();

    const { getByTestId } = render(
      <SavingInput setAmount={setAmount} setReach={setReach} />
    );

    const InputMonth = getByTestId('input-month');

    expect(InputMonth).toBeInTheDocument();
  });
});
