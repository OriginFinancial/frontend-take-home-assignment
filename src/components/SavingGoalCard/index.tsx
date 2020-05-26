import React from 'react';
import styled from 'styled-components';
import SimulationType from '../SimulationType';
import AmountInput from '../AmountInput';
import Button from '../Button';

const SavingGoalCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  width: 360px;
  height: 690px;
  left: 0px;
  top: 129px;

  background: #FFFFFF;
  box-shadow: 0px 2px 16px rgba(225, 232, 237, 0.8);

  @media (min-width: 1440px) {
    width: 560px;
    height: 600px;
`;

const SavingGoalContainer: React.FC = () => (
  <SavingGoalCard>
    <SimulationType />
    <AmountInput />
    <Button />
  </SavingGoalCard>
);

export default SavingGoalContainer;
