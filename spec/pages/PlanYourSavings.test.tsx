import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';

import theme from '../../src/theme';
import PlanYourSavings from '../../src/pages/PlanYourSavings';

describe('App', () => {
  it('renders', () => {
    render(
      <ThemeProvider theme={theme}>
        <PlanYourSavings />
      </ThemeProvider>
    );

    expect(screen.getByText(/let's plan your/i)).toBeTruthy();
    expect(screen.getByText(/saving goal./i)).toBeTruthy();
  });
});
