import React, { useState } from 'react';
import styled from 'styled-components';
import SimulationType from '../SimulationType';
import AmountInput from '../AmountInput';
import DateInput from '../DateInput';
import Button from '../Button';

const SavingGoalCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  padding: 24px;

  width: 360px;
  height: 690px;
  left: 0px;
  top: 129px;

  background: #FFFFFF;
  box-shadow: 0px 2px 16px rgba(225, 232, 237, 0.8);

  @media (min-width: 1024px) {
    padding: 40px;
    width: 560px;
    height: 600px;
`;

const SavingGoalContainer: React.FC = () => {
  const [totalAmount, setTotalAmount] = React.useState(25000);
  const [startDate, setGoalDate] = React.useState(new Date());

  return (
    <SavingGoalCard>
      <SimulationType />
      <AmountInput 
        value={totalAmount} 
        onChange={setTotalAmount} 
        {console.log(totalAmount)} 
      />
      <DateInput 
        selected={startDate}
        onChange={setGoalDate} 
        {console.log(startDate)} 
      />
      <Button />
    </SavingGoalCard>
  );
};

export default SavingGoalContainer;
