import React, { useState, useMemo } from 'react';
import styled from 'styled-components';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import differenceInCalendarMonths from 'date-fns/differenceInCalendarMonths';

const DateInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Label = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #1c1e1f;
  margin-bottom: 4px;
`;

const DateInputStyle = styled.div`
  display: flex;
`;

const Icon = styled.span`
  width: 48px;
  height: 56px
  background: #f4f8fa;
  border: 1px solid #e1e8ed;
  box-sizing: border-box;
  border-radius: 4px 0px 0px 4px;

  font-size: 22px;
  line-height: 26px;
  
  display: flex;
  align-items: center;
  justify-content: center;

  color: #657786;
`;

const InputStyle = styled.input`
  width: 216px;
  height: 56px;
  background: #ffffff;
  border: 1px solid #e1e8ed;
  box-sizing: border-box;

  text-align: center;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.166667px;
  color: #1c1e1f;

  @media (min-width: 801px) {
    width: 136px;
  }
`;

interface Date {
  onChange?: (value: number) => void;
  value?: number;
}

const DateInput: React.FC<Date> = ({ onChange, value }) => {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const diffMonths = differenceInCalendarMonths(selectedDate, (new Date())); 
  return (
    <DateInputContainer>
      <Label>Reach goal by</Label>
      <DateInputStyle>
        <Icon />
        <DatePicker
        selected={selectedDate}
        onChange={date => setSelectedDate(date)}
        dateFormat="MMM yyyy"
        showMonthYearPicker
        customInput={<InputStyle />}
        {console.log("diferença de meses", diffMonths)}
        />
        <Icon />
      </DateInputStyle>
    </DateInputContainer>
  );
};

export default DateInput;