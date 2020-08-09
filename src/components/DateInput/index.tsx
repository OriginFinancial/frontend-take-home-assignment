import React, { useEffect } from 'react';
import { addMonths } from 'date-fns';

import {
  DateField,
  InputContainer,
  LeftButton,
  RightButton,
  Year,
  Month
} from './styles';

import { isSameMonth } from 'date-fns';

const DateInput = props => {
  const { value, onChange, ...rest } = props;
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

  return (
    <InputContainer>
      <LeftButton
        onClick={() => changeDate(MINUS_ONE)}
        disabled={isSameMonth(value, MINIMUM_DATE)}
      >
        {'<'}
      </LeftButton>
      <DateField>
        <Month>{parseSelectedMonth(value)}</Month>
        <Year>{value.getFullYear()}</Year>
      </DateField>
      <RightButton onClick={() => changeDate(PLUS_ONE)}>{'>'}</RightButton>
    </InputContainer>
  );
};

export default DateInput;
