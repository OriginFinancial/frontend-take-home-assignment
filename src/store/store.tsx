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

export const TodoContext = React.createContext(initialState);

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

const reducer = (state, action) => {
  switch (action.type) {
    case 'AMOUNT':
      return {
        amount: action.payload
      };
    case 'FORWARD_DATE':
      return {
        goal: {
          month: state.month < 11 ? state.month++ : 0,
          year: state.month++ === 0 ? state.year++ : state.year,
          period:
            (state.year - initialState.goal.year) * 12 +
            Math.abs(state.month - initialState.goal.month)
        }
      };
    case 'BACKWARD_DATE':
      return {
        goal: {
          month: state.month > 0 ? state.month-- : 11,
          year: state.month-- === 11 ? state.year-- : state.year,
          period:
            (state.year - initialState.goal.year) * 12 +
            Math.abs(state.month - initialState.goal.month)
        }
      };
    default:
      return state;
  }
};

export const StoreContext = props => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {props.children}
    </StoreContext.Provider>
  );
};
