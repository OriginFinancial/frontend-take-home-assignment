import React from 'react';
import { render } from '@testing-library/react';
import { Goal } from '../Goal';

describe('Component: Goal', function() {
  function setup(plan) {
    const goal = {
      id: 'haveABaby',
      title: 'Have a baby',
      plan: plan,
      category: 'Baby'
    };

    return { goal };
  }

  test('renders the goal plan when it exists', function() {
    const { goal } = setup({ amount: 100, reachDate: '' });

    const { getByTestId } = render(<Goal goal={goal} />);

    const goalPlan = getByTestId('goal-plan');

    expect(goalPlan).toBeInTheDocument();
  });

  test("renders the goal setup when there's no plan", () => {
    const { goal } = setup();

    const { getByTestId } = render(<Goal goal={goal} />);

    const goalSetup = getByTestId('goal-setup');

    expect(goalSetup).toBeInTheDocument();
  });
});
