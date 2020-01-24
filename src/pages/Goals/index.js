import { Goals } from './Goals';
import { connect } from 'react-redux';
import { updateGoal, GOAL_STATE_KEY } from '../../store/goal';

const mapStateToProps = state => {
  return {
    goals: state[GOAL_STATE_KEY].goals
  };
};

const mapDispatchToProps = dispatch => ({
  setupGoal(id) {
    dispatch(updateGoal(id));
  }
});

const VisibleGoals = connect(mapStateToProps, mapDispatchToProps)(Goals);

export default VisibleGoals;
