import { Details } from './Details';
import { connect } from 'react-redux';
import { updateGoal, GOAL_STATE_KEY } from '../../store/goal';

const mapStateToProps = state => {
  return {
    goals: state[GOAL_STATE_KEY].goals
  };
};

const mapDispatchToProps = dispatch => ({
  updateGoal(goal) {
    dispatch(updateGoal(goal));
  }
});

const GoalDetails = connect(mapStateToProps, mapDispatchToProps)(Details);

export default GoalDetails;
