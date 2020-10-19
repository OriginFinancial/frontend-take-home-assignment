import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import theme from '../../src/theme';

import PlanYourSavings from '../../src/pages/PlanYourSavings';

describe('Plan Your Savings', () => {
  beforeAll(() => {
    jest.spyOn(Date, 'now').mockImplementation(() => {
      // october 13 2020
      return 1602641651336;
    });
  });

  it('displays its correct title', () => {
    render(
      <ThemeProvider theme={theme}>
        <PlanYourSavings />
      </ThemeProvider>
    );

    expect(screen.getByText(/let's plan your/i)).toBeTruthy();
    expect(screen.getByText(/saving goal./i)).toBeTruthy();
  });

  it('does not allow past dates', () => {
    render(
      <ThemeProvider theme={theme}>
        <PlanYourSavings />
      </ThemeProvider>
    );

    expect(screen.getByText('November')).toBeTruthy();

    const decreaseButton = screen.getByLabelText(/decrease/i);
    userEvent.click(decreaseButton);

    expect(screen.getByText('November')).toBeTruthy();
  });

  it('updates alert when goal field changes', () => {
    render(
      <ThemeProvider theme={theme}>
        <PlanYourSavings />
      </ThemeProvider>
    );

    const alertSelectedDate = screen.getByTestId('alert-selected-date');
    const alertDateDistance = screen.getByTestId('alert-date-distance');

    expect(alertSelectedDate).toHaveTextContent(/november 2020/gi);
    expect(alertDateDistance).toHaveTextContent(/1/gi);

    const increaseButton = screen.getByLabelText(/increase/i);
    userEvent.click(increaseButton);

    expect(alertSelectedDate).toHaveTextContent(/december 2020/gi);
    expect(alertDateDistance).toHaveTextContent(/2/gi);
  });

  it('updates alert when total amount field changes', () => {
    render(
      <ThemeProvider theme={theme}>
        <PlanYourSavings />
      </ThemeProvider>
    );

    const alertMonthlyAmount = screen.getByTestId('alert-monthly-amount');
    const alertGoal = screen.getByTestId('alert-goal');

    expect(alertMonthlyAmount).toHaveTextContent('$0');
    expect(alertGoal).toHaveTextContent('$0');

    const amountInput = screen.getByTestId('input-money');
    userEvent.type(amountInput, '1000');

    expect(alertGoal).toHaveTextContent('$1000');
    expect(alertMonthlyAmount).toHaveTextContent('$1000');
  });

  it('updates monthly amount according to total amount and goal input', () => {
    render(
      <ThemeProvider theme={theme}>
        <PlanYourSavings />
      </ThemeProvider>
    );

    const alertMonthlyAmount = screen.getByTestId('alert-monthly-amount');
    expect(alertMonthlyAmount).toHaveTextContent('$0');

    const amountInput = screen.getByTestId('input-money');
    const increaseButton = screen.getByLabelText(/increase/i);

    userEvent.type(amountInput, '1000');
    userEvent.click(increaseButton);

    expect(alertMonthlyAmount).toHaveTextContent('$500');
  });
});
