import React, { useState } from 'react';
import styled from 'styled-components';
import { differenceInCalendarMonths, getYear, format } from 'date-fns';

import SimulationType from '../SimulationType';
import AmountInput from '../AmountInput';
import DateInput from '../DateInput';
import Button from '../Button';

const SavingGoalCard = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  padding: 24px;

  width: 360px;
  height: 690px;

  background: #ffffff;
  box-shadow: 0px 2px 16px rgba(225, 232, 237, 0.8);

  @media (min-width: 801px) {
    padding: 40px;
    width: 560px;
    height: 600px;
  }
`;

const InputFieldsContainer = styled.div`
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

const ResultContainer = styled.div`
  width: 312px;
  height: 134px;
  display: flex;
  flex-direction: column;
  border: 1px solid #e1e8ed;
  border-radius: 4px;

  @media (min-width: 801px) {
    width: 480px;
    height: 168px;
  }
`;

const MonthlyAmountBox = styled.div`
  width: 310px;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 20px;
  background: #ffffff;
  h4 {
    font-weight: 500;
  }
  p {
    color: #0079ff;
    font-weight: 500;
    font-size: 26px;

    @media (min-width: 801px) {
      font-size: 40px;
    }
  }

  @media (min-width: 801px) {
    width: 478px;
    height: 102px;
  }
`;

const SavingPlanBox = styled.p`
  width: 310px;
  height: 70px;
  padding: 16px;
  background: #f4f8fa;
  font-size: 12px;

  @media (min-width: 801px) {
    width: 478px;
    height: 66px;
    font-size: 16px;
  }
`;

const ButtonPosition = styled.div`
  width: 100%;
  text-align: center;
`;

const SavingGoalContainer: React.FC = () => {
  const [totalAmount, setTotalAmount] = useState(25000);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const diffMonths = differenceInCalendarMonths(selectedDate, new Date());
  const monthlyAmount = (totalAmount / diffMonths).toFixed(0);
  const month = format(selectedDate, 'MMMM');
  const year = getYear(selectedDate);

  return (
    <SavingGoalCard>
      <SimulationType />
      <InputFieldsContainer>
        <AmountInput value={totalAmount} onChange={setTotalAmount} />
        <DateInput selected={selectedDate} onChange={setSelectedDate} />
      </InputFieldsContainer>
      <ResultContainer>
        <MonthlyAmountBox>
          <h4>Monthly Amount</h4>
          <p>${monthlyAmount}</p>
        </MonthlyAmountBox>
        <SavingPlanBox>
          You&apos;re planning <strong>{diffMonths} monthly deposits</strong> to
          reach your <strong> ${totalAmount}</strong> goal by{' '}
          <strong>
            {month} {year}
          </strong>
          .
        </SavingPlanBox>
      </ResultContainer>
      <ButtonPosition>
        <Button />
      </ButtonPosition>
    </SavingGoalCard>
  );
};

export default SavingGoalContainer;
