import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ApplicationState } from '../../store';
import { SavingGoals } from '../../store/ducks/savings/types';
import * as SavingActions from '../../store/ducks/savings/actions';

import { Container } from './styles';
import { Card } from '../../components';

import img from '../../icons/academy.svg';

interface StateProps {
  savings: SavingGoals;
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
    const { savings } = this.props;
    return (
      <Container.Box>
        {savings.data.map((saving: string) => (
          <Card.Box key={saving}>
            <img src={img} alt="academy" />
            <Card.Title>{saving}</Card.Title>
            <Card.Button>Start setup</Card.Button>
          </Card.Box>
        ))}
      </Container.Box>
    );
  }
}

const mapStateToProps = ({ savings }: ApplicationState) => ({
  savings
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(SavingActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Savings);
