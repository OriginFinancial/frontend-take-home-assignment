import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ApplicationState } from '../../store';
import { SavingGoals } from '../../store/ducks/savings/types';
import * as SavingActions from '../../store/ducks/savings/actions';

import { Card } from '../../components';
import * as icon from '../../icons';

import { Page } from './styles';

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
      <Page.Container>
        <Page.Nav>
          <Page.Logo src={icon.logo} alt="logo" />
        </Page.Nav>
        <Card.Wrapper>
          <Card.Title>Here&apos;s your saving goals!</Card.Title>
          {savings.data.map((saving: string) => {
            let text = saving.replace(/([A-Z])/g, ' $1').toLowerCase();
            text = text.charAt(0).toUpperCase() + text.slice(1);
            return (
              <Card.Box key={saving}>
                <Card.Image src={icon[saving]} alt={text} />
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

const mapStateToProps = ({ savings }: ApplicationState) => ({
  savings
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(SavingActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Savings);
