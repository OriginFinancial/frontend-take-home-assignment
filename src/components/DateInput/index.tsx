import React from 'react';
import arrow from '../../icons/arrow.svg';
import {
  DateField,
  InputLabel,
  InputContainer,
  FieldContainer,
  LeftButton,
  RightButton,
  Year,
  Month
} from './styles';

import { isSameMonth, addMonths } from 'date-fns';
import {parseDateToString} from '../../helpers/formatters';

export interface DateInputProps {
  value: Date; 
  onChange: (value: Date) => void;
}

const DateInput = (props: DateInputProps) => {
  const { value, onChange } = props;
  const PLUS_ONE:number = +1;
  const MINUS_ONE:number = -1;
  const MINIMUM_DATE: Date = addMonths(new Date(), 1);

  const changeDate = (addition: number): void => {
    const selectedDate: Date = value;
    const newDate: Date = addMonths(selectedDate, addition);
    onChange(new Date(newDate));
  };

  const arrowImg = <img src={arrow} />;

  return (
    <InputContainer>
      <InputLabel>Reach goal by</InputLabel>
      <FieldContainer>
        <LeftButton
          onClick={() => changeDate(MINUS_ONE)}
          disabled={isSameMonth(value, MINIMUM_DATE)}
        >
          {arrowImg}
        </LeftButton>
        <DateField>
          <Month>{parseDateToString(value, true, false)}</Month>
          <Year>{parseDateToString(value, false, true)}</Year>
        </DateField>
        <RightButton onClick={() => changeDate(PLUS_ONE)}>
          {arrowImg}
        </RightButton>
      </FieldContainer>
    </InputContainer>
  );
};

export default DateInput;
