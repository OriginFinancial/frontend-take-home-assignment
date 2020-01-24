import React, { useState } from 'react';
import Styled, { css } from 'styled-components';
import { func } from 'prop-types';
import { Input } from './Input';
import dayjs from 'dayjs';

const propTypes = {
  setReach: func.isRequired
};

const Wrapper = Styled.div`
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 30px;

  input {
    padding-left: 12px;
    font-size: 20px;
    font-weight: 600; 
  }
`;

const buttonBase = css`
  color: #657786;
  background-color: #e1e8ed;
  border: 1px solid #e1e8ed;
  padding: 1.2em 1.2em;
  font-size: 16px;
`;

const Decrement = Styled.button`
  ${buttonBase}
  border-radius: 5px 0 0 5px;
`;
const Increment = Styled.button`
  ${buttonBase}
  border-radius: 0 5px 5px 0;
`;

const InputMonth = ({ setReach, ...props }) => {
  const [monthYear, setMonthYear] = useState(dayjs());

  const decrementMonth = () => {
    const newDate = monthYear.subtract(1, 'month');

    setMonthYear(newDate);
    setReach(newDate);
  };

  const incrementMonth = () => {
    const newDate = monthYear.add(1, 'month');

    setMonthYear(newDate);
    setReach(newDate);
  };

  return (
    <Wrapper {...props}>
      <Decrement
        data-testid="decrement-date"
        onClick={decrementMonth}
      >{`<`}</Decrement>
      <Input
        data-testid="formated-reach-date"
        value={monthYear.format('MMMM YYYY')}
        textAlign="center"
        readOnly
      />
      <Increment
        data-testid="increment-date"
        onClick={incrementMonth}
      >{`>`}</Increment>
    </Wrapper>
  );
};

InputMonth.propTypes = propTypes;

export { InputMonth };
