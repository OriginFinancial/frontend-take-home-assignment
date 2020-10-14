import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import InputMonth from '../../src/components/InputMonth';

describe('InputMonth', () => {
  beforeAll(() => {
    jest.spyOn(Date, 'now').mockImplementation(() => {
      // 13/10/2020
      return 1602641651336;
    });
  });

  it('renders', () => {
    render(<InputMonth />);

    expect(screen.getByText(/october/i)).toBeTruthy();
    expect(screen.getByText(/2020/i)).toBeTruthy();
  });

  it('adds a month when button increase is clicked', () => {
    render(<InputMonth />);

    const increaseButton = screen.getByTestId(/increase/i);
    userEvent.click(increaseButton);

    expect(screen.getByText(/november/i)).toBeTruthy();
  });

  it('subtracts a month when button decrease is clicked', () => {
    render(<InputMonth />);

    const decreaseButton = screen.getByTestId(/decrease/i);
    userEvent.click(decreaseButton);

    expect(screen.getByText(/september/i)).toBeTruthy();
  });

  it('does not allow past dates', () => {
    render(<InputMonth pastDates={false} />);

    const decreaseButton = screen.getByTestId(/decrease/i);
    userEvent.click(decreaseButton);

    expect(screen.getByText(/october/i)).toBeTruthy();
  });
});
