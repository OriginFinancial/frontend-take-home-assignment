import React from 'react';
import { render } from '@testing-library/react';
import { Goals } from '../Goals';

describe('Page: Goals', function() {
  test('renders a list of goals', function() {
    const goals = [{ title: 'car', category: 'Car' }];

    const { getByTestId } = render(<Goals goals={goals} />);

    const goal = getByTestId('car');

    expect(goal).toBeInTheDocument();
  });
});
