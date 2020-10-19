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
  align-items: center;
  border: 1px solid #e1e8ed;
  border-radius: 4px;
  display: flex;
  height: 56px;
  justify-content: space-between;
  width: 100%;
`;

const Button = styled.button`
  border: none;
  height: 100%;
  padding: 18px;
  width: 48px;
`;

const Value = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
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

  const increaseRef = React.useRef<HTMLButtonElement>();
  const decreaseRef = React.useRef<HTMLButtonElement>();

  const [date, dispatch] = React.useReducer(stateReducer, initialDate);

  React.useEffect(() => {
    const decreaseButton = decreaseRef.current;
    const increaseButton = increaseRef.current;

    const handleKey = (event: KeyboardEvent) => {
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
