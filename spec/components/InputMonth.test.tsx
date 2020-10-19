import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import InputMonth from '../../src/components/InputMonth';

describe('InputMonth', () => {
  beforeAll(() => {
    jest.spyOn(Date, 'now').mockImplementation(() => {
      // october 13 2020
      return 1602641651336;
    });
  });

  it('renders correct date when one is provided', () => {
    render(<InputMonth startDate={new Date('2021 30, december')} />);

    expect(screen.getByText(/december/i)).toBeTruthy();
    expect(screen.getByText('2021')).toBeTruthy();
  });

  it('adds a month when button increase is clicked', () => {
    render(<InputMonth />);

    expect(screen.getByText(/october/i)).toBeTruthy();
    expect(screen.getByText('2020')).toBeTruthy();

    const increaseButton = screen.getByLabelText(/increase/i);
    userEvent.click(increaseButton);

    expect(screen.getByText(/november/i)).toBeTruthy();
  });

  it('subtracts a month when button decrease is clicked', () => {
    render(<InputMonth />);

    expect(screen.getByText(/october/i)).toBeTruthy();
    expect(screen.getByText('2020')).toBeTruthy();

    const decreaseButton = screen.getByLabelText(/decrease/i);
    userEvent.click(decreaseButton);

    expect(screen.getByText(/september/i)).toBeTruthy();
  });

  it('adds a month when right arrow key is pressed', () => {
    const { container } = render(<InputMonth />);

    expect(screen.getByText(/october/i)).toBeTruthy();
    expect(screen.getByText('2020')).toBeTruthy();

    fireEvent.keyUp(container, {
      key: 'ArrowRight',
      keyCode: 39
    });

    expect(screen.getByText(/november/i)).toBeTruthy();
    expect(screen.getByText('2020')).toBeTruthy();
  });

  it('subtracts a month when left arrow key is pressed', () => {
    const { container } = render(<InputMonth />);

    expect(screen.getByText(/october/i)).toBeTruthy();

    fireEvent.keyUp(container, {
      key: 'ArrowLeft',
      keyCode: 37
    });

    expect(screen.getByText(/september/i)).toBeTruthy();
  });

  it('updates its year when december/january is reached', () => {
    render(<InputMonth startDate={new Date('2020 30, december')}/>);

    const decreaseButton = screen.getByLabelText(/decrease/i);
    const increaseButton = screen.getByLabelText(/increase/i);

    userEvent.click(increaseButton);

    expect(screen.getByText(/january/i)).toBeTruthy();
    expect(screen.getByText('2021')).toBeTruthy();

    userEvent.click(decreaseButton);

    expect(screen.getByText(/december/i)).toBeTruthy();
    expect(screen.getByText('2020')).toBeTruthy();
  });
});
