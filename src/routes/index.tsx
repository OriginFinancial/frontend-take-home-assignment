import * as React from 'react';
import {
  Switch,
  Route,
  HashRouter as Router,
  RouteComponentProps
} from 'react-router-dom';
// import { ConnectedRouter } from 'connected-react-router';

// import history from './history';
import { Saving, Main } from '../pages';

import { Page } from '../components';
import { logo } from '../icons';

interface MatchParams {
  id: string;
}

type MatchProps = RouteComponentProps<MatchParams>;

// to do routes with redux-saga

const Routes: React.FC = () => (
  // <ConnectedRouter history={history}>
  <Router basename="/">
    <Page.Container>
      <Page.Nav>
        <Page.Logo src={logo} alt="logo" />
      </Page.Nav>

      <Switch>
        <Route exact path="/" component={Main} />
        <Route
          path="/goal/:id"
          render={({ match }: MatchProps) => <Saving id={match.params.id} />}
        />
      </Switch>
    </Page.Container>
  </Router>
  // </ConnectedRouter>
);

export default Routes;
