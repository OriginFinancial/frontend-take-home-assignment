import { createStore, combineReducers } from 'redux';
import throttle from 'lodash/throttle';
import { loadState, saveState } from './middlewares/localStorage';
import { composeWithDevTools } from 'redux-devtools-extension';
import { GOAL_STATE_KEY, registerGoalReducer } from './goal';

const persistedState = loadState();

const rootReducer = combineReducers({
  ...registerGoalReducer()
});

const store = createStore(rootReducer, persistedState, composeWithDevTools());

store.subscribe(
  throttle(() => {
    const state = store.getState();

    saveState({
      [GOAL_STATE_KEY]: state[GOAL_STATE_KEY]
    });
  }, 1000)
);

export { store };
