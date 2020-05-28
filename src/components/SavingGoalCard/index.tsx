import React, { useState } from 'react';
import styled from 'styled-components';
import SimulationType from '../SimulationType';
import AmountInput from '../AmountInput';
import DateInput from '../DateInput';
import Result from '../Result';
import Button from '../Button';
import differenceInCalendarMonths from 'date-fns/differenceInCalendarMonths';

const SavingGoalCard = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  padding: 24px;

  width: 360px;
  height: 690px;

  background: #FFFFFF;
  box-shadow: 0px 2px 16px rgba(225, 232, 237, 0.8);

  @media (min-width: 801px) {
    padding: 40px;
    width: 560px;
    height: 600px;
  }
`;

const InputFields = styled.div`
display: flex;
flex-direction:column;
justify-content: space-between;
align-content: space-between;
height: 176px;

@media (min-width: 801px) {
  flex-direction: row;
  width: 478px;
  height: 80px;
`;

const ButtonPosition = styled.div`
width: 100%;
text-align: center;
`;

const SavingGoalContainer: React.FC = () => {
  const [totalAmount, setTotalAmount] = React.useState(25000);
  // const [initialDate, setInitialDate] = React.useState(new Date());

  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const diffMonths = differenceInCalendarMonths(selectedDate, new Date());

  return (
    <SavingGoalCard>
      <SimulationType />
      <InputFields>
        <AmountInput 
          value={totalAmount} 
          onChange={setTotalAmount} 
        />
        <DateInput 
          selected={selectedDate}
          onChange={setSelectedDate}
          />
      </InputFields>
      <Result
          monthlyAmount={totalAmount/diffMonths}
          totalMonths={diffMonths}
          totalAmount={totalAmount}
          goalDate={selectedDate} 
          {console.log(totalAmount/diffMonths, diffMonths, totalAmount, selectedDate)}
      
      />
      <ButtonPosition>
        <Button />
      </ButtonPosition>
    </SavingGoalCard>
  );
};

export default SavingGoalContainer;
