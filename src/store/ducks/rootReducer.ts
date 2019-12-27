import { combineReducers } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';
import savings from './savings';

const rootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    savings
  });

export default rootReducer;
