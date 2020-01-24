import React from 'react';
import { render } from '@testing-library/react';
import { Details } from '../Details';

describe('Page: Details', function() {
  function setup() {
    const car = {
      id: 'buyACar',
      title: 'Buy a car',
      plan: null,
      category: 'Car'
    };
    const goals = [car];
    const goalId = car.id;
    const updateGoal = () => {};
    const navigate = () => {};

    return { goals, goalId, updateGoal, navigate, car };
  }

  test('renders goal title', function() {
    const { car, ...props } = setup();

    const { getByTestId } = render(<Details {...props} />);

    const goalTitle = getByTestId('goal-title');

    expect(goalTitle).toHaveTextContent(car.title);
  });

  test('renders the navigate back button', function() {
    const props = setup();

    const { getByTestId } = render(<Details {...props} />);

    const navigateButton = getByTestId('navigate-back');

    expect(navigateButton).toBeInTheDocument();
  });

  test('renders the save goal button', function() {
    const props = setup();

    const { getByTestId } = render(<Details {...props} />);

    const saveGoal = getByTestId('save-goal');

    expect(saveGoal).toBeInTheDocument();
  });
});
