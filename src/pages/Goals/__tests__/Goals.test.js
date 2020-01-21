import React from 'react';
import { render } from '@testing-library/react';
import { Goals } from '../Goals';

describe('Page: Goals', function() {
  test('renders a list of goals', function() {
    const goals = [{ title: 'car', icon: <i>car</i> }];

    const { getByTestId } = render(<Goals goals={goals} />);

    const goal = getByTestId('car');

    expect(goal).toBeInTheDocument();
  });

  test('renders a default message when does not have goals', () => {
    const { getByTestId } = render(<Goals goals={[]} />);

    const message = getByTestId('empty-list');

    expect(message).toBeInTheDocument();
  });
});
