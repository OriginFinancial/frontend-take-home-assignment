import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ApplicationState } from '../../store';
import { SavingGoal } from '../../store/ducks/savings/types';
import * as SavingActions from '../../store/ducks/savings/actions';

import { Card } from '../../components';
import * as icon from '../../icons';

import { Page } from './styles';

interface StateProps {
  savings: SavingGoal[];
  loading: boolean;
  error: boolean;
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
    const { savings, loading, error } = this.props;
    return (
      <Page.Container>
        <Page.Nav>
          <Page.Logo src={icon.logo} alt="logo" />
        </Page.Nav>
        <Card.Wrapper>
          <Card.Title>
            {loading ? 'Loading...' : `Here's your saving goals!`}
          </Card.Title>
          {savings.map((saving: SavingGoal) => {
            const { id, name } = saving;
            let text = name.replace(/([A-Z])/g, ' $1').toLowerCase();
            text = text.charAt(0).toUpperCase() + text.slice(1);
            return (
              <Card.Box key={id}>
                <Card.Image src={icon[name]} alt={text} />
                <Card.Text>{text}</Card.Text>
                <Card.Button>Start setup</Card.Button>
              </Card.Box>
            );
          })}
        </Card.Wrapper>
      </Page.Container>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  savings: state.savings.data,
  loading: state.savings.loading,
  error: state.savings.error
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(SavingActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Savings);
