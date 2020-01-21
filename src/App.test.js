import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders header component', () => {
  const { getByTestId } = render(<App />);

  const headerComponent = getByTestId('header-component');

  expect(headerComponent).toBeInTheDocument();
});
