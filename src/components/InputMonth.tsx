import * as React from 'react';
import styled from 'styled-components';
import { addMonths, subMonths, format } from 'date-fns';
import Icon from './Icon';

interface InputMonthProps {
  startDate?: Date;
  onChange?: Function;
  stateReducer?: React.Reducer<Date, INPUT_MONTH_ACTIONS>;
}

const Container = styled.div`
  height: 56px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #e1e8ed;
  border-radius: 4px;
`;

const Button = styled.button`
  height: 100%;
  width: 48px;
  padding: 18px;
  border: none;
`;

const Value = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Month = styled.div`
  flex: 1;
  font-weight: 600;
  font-size: 20px;
`;

const Year = styled.div``;

export enum INPUT_MONTH_ACTIONS {
  INCREASE,
  DECREASE
}

const inputMonthReducer: React.Reducer<Date, INPUT_MONTH_ACTIONS> = (
  date,
  action
) => {
  switch (action) {
    case INPUT_MONTH_ACTIONS.INCREASE:
      return addMonths(date, 1);
    case INPUT_MONTH_ACTIONS.DECREASE:
      return subMonths(date, 1);
  }
};

const InputMonth: React.FunctionComponent<InputMonthProps> = ({
  startDate,
  onChange,
  stateReducer = inputMonthReducer
}) => {
  const now = Date.now();
  const initialDate = startDate || new Date(now);

  const increaseRef = React.useRef();
  const decreaseRef = React.useRef();

  const [date, dispatch] = React.useReducer(stateReducer, initialDate);

  React.useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      const decreaseButton: HTMLElement = decreaseRef.current;
      const increaseButton: HTMLElement = increaseRef.current;

      switch (event.key) {
        case 'ArrowLeft':
          decreaseButton.click();
          decreaseButton.focus();
          break;
        case 'ArrowRight':
          increaseButton.click();
          increaseButton.focus();
          break;
      }
    };

    window.addEventListener('keyup', handleKey);

    return () => {
      window.removeEventListener('keyup', handleKey);
    };
  }, [increaseRef, decreaseRef]);

  React.useEffect(() => {
    if (onChange) {
      onChange(date);
    }
  }, [date, onChange]);

  return (
    <Container>
      <Button
        ref={decreaseRef}
        aria-label="Decrease"
        onClick={() => dispatch(INPUT_MONTH_ACTIONS.DECREASE)}
      >
        <Icon.ArrowLeft />
      </Button>
      <Value>
        <Month>{format(date, 'MMMM')}</Month>
        <Year>{format(date, 'yyyy')}</Year>
      </Value>
      <Button
        ref={increaseRef}
        aria-label="Increase"
        onClick={() => dispatch(INPUT_MONTH_ACTIONS.INCREASE)}
      >
        <Icon.ArrowRight />
      </Button>
    </Container>
  );
};

export default InputMonth;
