import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import theme from '../../src/theme';
import PlanYourSavings from '../../src/pages/PlanYourSavings';
import userEvent from '@testing-library/user-event';

describe('Plan Your Savings', () => {
  beforeAll(() => {
    jest.spyOn(Date, 'now').mockImplementation(() => {
      // october 13 2020
      return 1602641651336;
    });
  });

  it('renders', () => {
    render(
      <ThemeProvider theme={theme}>
        <PlanYourSavings />
      </ThemeProvider>
    );

    expect(screen.getByText(/let's plan your/i)).toBeTruthy();
    expect(screen.getByText(/saving goal./i)).toBeTruthy();
  });

  it('updates alert when goal field changes', () => {
    render(
      <ThemeProvider theme={theme}>
        <PlanYourSavings />
      </ThemeProvider>
    );

    const alertSelectedDate = screen.getByTestId(/alert-selected-date/i);
    const alertDateDistance = screen.getByTestId(/alert-date-distance/);

    expect(alertSelectedDate).toHaveTextContent(/november 2020/gi);
    expect(alertDateDistance).toHaveTextContent(/1/gi);

    const increaseButton = screen.getByLabelText(/increase/i);
    userEvent.click(increaseButton);

    expect(alertSelectedDate).toHaveTextContent(/december 2020/gi);
    expect(alertDateDistance).toHaveTextContent(/2/gi);
  });
});
