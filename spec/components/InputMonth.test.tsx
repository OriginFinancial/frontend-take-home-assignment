import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import InputMonth from '../../src/components/InputMonth';

describe('InputMonth', () => {
  beforeAll(() => {
    jest.spyOn(Date, 'now').mockImplementation(() => {
      // october 13 2020
      return 1602641651336;
    });
  });

  it('adds a month when button increase is clicked', () => {
    render(<InputMonth />);

    expect(screen.getByText(/october/i)).toBeTruthy();

    const increaseButton = screen.getByLabelText(/increase/i);
    userEvent.click(increaseButton);

    expect(screen.getByText(/november/i)).toBeTruthy();
  });

  it('subtracts a month when button decrease is clicked', () => {
    render(<InputMonth startAt={new Date('november 15, 2020')} />);

    expect(screen.getByText(/november/i)).toBeTruthy();

    const decreaseButton = screen.getByLabelText(/decrease/i);
    userEvent.click(decreaseButton);

    expect(screen.getByText(/october/i)).toBeTruthy();
  });

  it('does not allow past dates', () => {
    render(<InputMonth />);

    expect(screen.getByText(/october/i)).toBeTruthy();

    const decreaseButton = screen.getByLabelText(/decrease/i);
    userEvent.click(decreaseButton);

    expect(screen.getByText(/october/i)).toBeTruthy();
  });
});
