import * as React from 'react';

interface InitialState {
  amount?: string;
  goal?: {
    month: number;
    year: number;
    period: number;
  };
}

const initialState: InitialState = {
  amount: '2500000',
  goal: {
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
    period: 0
  }
};

type ActionType =
  | { type: 'AMOUNT'; payload: string }
  | { type: 'FORWARD_DATE' }
  | { type: 'BACKWARD_DATE' };

const reducer = (state: InitialState, action: ActionType) => {
  let month, year, period;
  switch (action.type) {
    case 'AMOUNT':
      return {
        ...state,
        amount: action.payload
      };
    case 'FORWARD_DATE':
      month = state.goal.month < 11 ? state.goal.month + 1 : 0;
      year = month === 0 ? state.goal.year + 1 : state.goal.year;
      period = state.goal.period + 1;
      return {
        ...state,
        goal: {
          month: month,
          year: year,
          period: period
        }
      };
    case 'BACKWARD_DATE':
      month = state.goal.month > 0 ? state.goal.month - 1 : 11;
      year = month === 11 ? state.goal.year - 1 : state.goal.year;
      period = state.goal.period - 1;
      return {
        ...state,
        goal: {
          month: month,
          year: year,
          period: period
        }
      };
    default:
      return state;
  }
};

export const StoreContext = React.createContext<{
  state: InitialState;
  dispatch: React.Dispatch<ActionType>;
}>({
  state: initialState,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  dispatch: () => {}
});

export const StoreContextProvider: React.FunctionComponent = props => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {props.children}
    </StoreContext.Provider>
  );
};
