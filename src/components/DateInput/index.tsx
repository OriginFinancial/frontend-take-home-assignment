import React from 'react';
import styled from 'styled-components';
import { mediaQ } from '../../ui/mediaQueries';

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
  height: 56px;
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

  ${mediaQ.desktop} {
    width: 136px;
  }
`;

interface Props {
  onChange?: (value: Date) => void;
  selectedDate: Date;
}

const DateInput: React.FC<Props> = ({ onChange, selectedDate }) => {
  return (
    <DateInputContainer>
      <Label>Reach goal by</Label>
      <DateInputStyle>
        <Icon />
        <DatePicker
          selected={selectedDate}
          onChange={date => onChange(date)}
          dateFormat="MMMM yyyy"
          showMonthYearPicker
          customInput={<InputStyle />}
        />
        <Icon />
      </DateInputStyle>
    </DateInputContainer>
  );
};

export default DateInput;
