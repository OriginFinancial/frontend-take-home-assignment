import { createReducer } from 'redux-act';
import { updateGoal } from './goal.actions';
import initialState from './initialState';

const STATE_KEY = 'goalState';

const updateGoalData = ({ goals }, updatedGoal) => {
  const newGoals = goals.map(goal => {
    if (goal.id === updatedGoal.id) {
      return updatedGoal;
    }

    return goal;
  });

  return {
    goals: newGoals
  };
};

const reducer = createReducer(
  {
    [updateGoal]: updateGoalData
  },
  initialState
);

const registerGoalReducer = () => ({ [STATE_KEY]: reducer });

export { STATE_KEY as GOAL_STATE_KEY, registerGoalReducer };
