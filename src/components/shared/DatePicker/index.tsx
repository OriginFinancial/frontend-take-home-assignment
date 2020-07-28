import React, { useState, KeyboardEvent } from 'react';

import { monthFormatter, yearFormatter } from '../../../helpers/formatters';

import {
  DateInputContainer,
  Label,
  DateInputStyle,
  ArrowIcon,
  InputContainer,
  Year,
  Month
} from './styles';

import { DatePickerProps } from './interfaces';

const DatePicker: React.FC<DatePickerProps> = ({ onChange, selectedDate }) => {
  const [dateGoal, setDateGoal] = useState(selectedDate);

  const handleDate = (sum: number) => {
    const today = new Date();
    const nextDate = new Date(dateGoal.getTime());
    nextDate.setMonth(nextDate.getMonth() + sum);

    if (nextDate >= today) {
      setDateGoal(nextDate);
      onChange(nextDate);
    }
  };

  const keyDownHandler = (event: KeyboardEvent<HTMLDivElement>) => {
    const { key } = event;

    if (key !== 'ArrowLeft' && key !== 'ArrowRight') {
      return;
    }

    const sum = key === 'ArrowLeft' ? -1 : +1;
    handleDate(sum);
  };

  const currentMonth = monthFormatter(dateGoal);
  const currentYear = yearFormatter(dateGoal);

  return (
    <DateInputContainer>
      <Label>Reach goal by</Label>

      <DateInputStyle tabIndex={0} onKeyDown={keyDownHandler}>
        <ArrowIcon direction="left" onClick={() => handleDate(-1)} />
        <InputContainer>
          <Month>{currentMonth}</Month>
          <Year>{currentYear}</Year>
        </InputContainer>
        <ArrowIcon direction="right" onClick={() => handleDate(+1)} />
      </DateInputStyle>
    </DateInputContainer>
  );
};

DatePicker.defaultProps = {
  selectedDate: new Date()
};

export default DatePicker;
