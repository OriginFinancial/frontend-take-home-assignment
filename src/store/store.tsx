import * as React from 'react';

interface InitialState {
  amount: string;
  goal: {
    month: number;
    year: number;
    period: number;
  };
}

const initialState: InitialState = {
  amount: '000',
  goal: {
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
    period: 0
  }
};

export const StoreContext = React.createContext<{
  state: InitialState;
  dispatch: React.Dispatch<ActionType>;
}>({
  state: initialState,
  dispatch: () => null
});

export const months: Array<string> = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro'
];

type ActionType =
  | { type: 'AMOUNT'; payload: string }
  | { type: 'FORWARD_DATE' }
  | { type: 'BACKWARD_DATE' };

const reducer = (state: InitialState, action: ActionType) => {
  switch (action.type) {
    case 'AMOUNT':
      return {
        amount: action.payload
      };
    case 'FORWARD_DATE':
      return {
        goal: {
          month: state.goal.month < 11 ? state.goal.month++ : 0,
          year: state.goal.month++ === 0 ? state.goal.year++ : state.goal.year,
          period:
            (state.goal.year - initialState.goal.year) * 12 +
            Math.abs(state.goal.month - initialState.goal.month)
        }
      };
    case 'BACKWARD_DATE':
      return {
        goal: {
          month: state.goal.month > 0 ? state.goal.month-- : 11,
          year: state.goal.month-- === 11 ? state.goal.year-- : state.goal.year,
          period:
            (state.goal.year - initialState.goal.year) * 12 +
            Math.abs(state.goal.month - initialState.goal.month)
        }
      };
    default:
      return state;
  }
};

export const StoreContextProvider: React.FunctionComponent = props => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {props.children}
    </StoreContext.Provider>
  );
};
