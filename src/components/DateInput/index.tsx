import React from 'react';
import { addMonths } from 'date-fns';
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

import { isSameMonth } from 'date-fns';

export interface DateInputProps {
  value: Date; 
  onChange: (value: Date) => void;
}

const DateInput = (props: DateInputProps) => {
  const { value, onChange } = props;
  const PLUS_ONE = +1;
  const MINUS_ONE = -1;
  const MINIMUM_DATE: Date = addMonths(new Date(), 1);

  const changeDate = (addition: number): void => {
    const selectedDate: Date = value;
    const newDate = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + addition,
      selectedDate.getDate()
    );
    onChange(new Date(newDate));
  };

  const parseSelectedMonth = (value: Date): string => {
    if (value) {
      const month = value.toLocaleDateString('en-US', { month: 'long' });
      return month;
    }
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
          <Month>{parseSelectedMonth(value)}</Month>
          <Year>{value.getFullYear()}</Year>
        </DateField>
        <RightButton onClick={() => changeDate(PLUS_ONE)}>
          {arrowImg}
        </RightButton>
      </FieldContainer>
    </InputContainer>
  );
};

export default DateInput;
