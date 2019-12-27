import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ApplicationState } from '../../store';
import { SavingGoal } from '../../store/ducks/savings/types';
import * as SavingActions from '../../store/ducks/savings/actions';

import { Card } from '../../components';
import * as icon from '../../icons';

interface StateProps {
  savings: SavingGoal[];
  loading: boolean;
}

interface DispatchProps {
  loadRequest: () => void;
}

type Props = StateProps & DispatchProps;

export class Savings extends React.Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;
    loadRequest();
  }

  render() {
    const { savings, loading } = this.props;
    return (
      <Card.Wrapper>
        <Card.Title>
          {loading ? 'Loading...' : `Here's your saving goals!`}
        </Card.Title>
        {savings.map((saving: SavingGoal) => {
          const { id, name, goal, value, date } = saving;
          let text = name.replace(/([A-Z])/g, ' $1').toLowerCase();
          text = text.charAt(0).toUpperCase() + text.slice(1);
          return (
            <Card.Box key={id}>
              <Card.Head>
                <Card.Image src={icon[name]} alt={text} />
                <Card.Text>{text}</Card.Text>
              </Card.Head>
              <Card.Body>
                {!goal ? (
                  <Card.Button
                    onClick={() => {
                      (saving);
                      // TODO redux-saga
                      window.location.replace(`/goal/${id}`);
                    }}
                  >
                    Start setup
                  </Card.Button>
                ) : (
                  <>
                    <p>{value}</p>
                    <p>{date}</p>
                  </>
                )}
              </Card.Body>
            </Card.Box>
          );
        })}
      </Card.Wrapper>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  savings: state.savings.data,
  loading: state.savings.loading
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(SavingActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Savings);
