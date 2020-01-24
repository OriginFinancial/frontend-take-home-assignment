import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { InputAmount } from '../InputAmount';

describe('Component: InputAmount', function() {
  test('renders the input amount', function() {
    const { getByTestId } = render(<InputAmount setAmount={() => {}} />);

    const inputAmount = getByTestId('input-amount');

    expect(inputAmount).toBeInTheDocument();
  });

  test('sets the amount typed on the input', () => {
    let amount = 0;

    const { getByTestId } = render(
      <InputAmount setAmount={value => (amount = value)} />
    );
    const inputAmount = getByTestId('input-amount');
    fireEvent.change(inputAmount, { target: { value: '1000' } });

    expect(amount).toBe(1000);
  });
});
