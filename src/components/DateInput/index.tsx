import React from 'react';
import styled from 'styled-components';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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

  @media (min-width: 1024px) {
    width: 136px;
  }
`;

interface Date {
  // onChange?: (value: number) => void;
  // value?: number;
}

const DateInput: React.FC<Date> = ({ onChange, value }) => {

  return (
    <DateInputContainer>
      <Label>Reach goal by</Label>
      <DateInputStyle>
        <Icon>X</Icon>
        <DatePicker
          selected={value}
          onChange={date => onChange(date)}
          dateFormat="MMM yyyy"
          showMonthYearPicker
          customInput={<InputStyle />}
          // {console.log(value)}
        />
        <Icon>X</Icon>
      </DateInputStyle>
    </DateInputContainer>
  );
};

export default DateInput;
