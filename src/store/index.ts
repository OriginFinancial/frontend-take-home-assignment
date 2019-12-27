import { createStore, compose, applyMiddleware, Store } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';

import { SavingsState } from './ducks/savings/types';
import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

import history from '../routes/history';

export interface ApplicationState {
  savings: SavingsState;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  rootReducer(history),
  compose(applyMiddleware(routerMiddleware(history), sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
