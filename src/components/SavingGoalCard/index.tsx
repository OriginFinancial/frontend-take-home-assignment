import React, { useState } from 'react';
import styled from 'styled-components';
import { differenceInCalendarMonths, getYear, format } from 'date-fns';

import { mediaQ } from '../../ui/MediaQueries';
import SavingGoalCard from '../../ui/SavingGoalCard';

import SimulationType from '../SimulationType';
import AmountInput from '../AmountInput';
import DateInput from '../DateInput';
import Button from '../Button';

const InputFields = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  height: 176px;

  ${mediaQ.desktop} {
    flex-direction: row;
    width: 478px;
    height: 80px;
  }
`;

const Result = styled.div`
  width: 312px;
  height: 134px;
  display: flex;
  flex-direction: column;
  border: 1px solid #e1e8ed;
  border-radius: 4px;

  ${mediaQ.desktop} {
    width: 480px;
    height: 168px;
  }
`;

const MonthlyAmount = styled.div`
  width: 309px;
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

    ${mediaQ.desktop} {
      font-size: 40px;
    }
  }

  ${mediaQ.desktop} {
    width: 477px;
    height: 102px;
  }
`;

const SavingPlan = styled.p`
  width: 309px;
  height: 70px;
  padding: 16px;
  background: #f4f8fa;
  font-size: 12px;

  ${mediaQ.desktop} {
    width: 477px;
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
      <InputFields>
        <AmountInput value={totalAmount} onChange={setTotalAmount} />
        <DateInput selected={selectedDate} onChange={setSelectedDate} />
      </InputFields>
      <Result>
        <MonthlyAmount>
          <h4>Monthly Amount</h4>
          <p>${monthlyAmount}</p>
        </MonthlyAmount>
        <SavingPlan>
          You&apos;re planning <strong>{diffMonths} monthly deposits</strong> to
          reach your <strong> ${totalAmount}</strong> goal by{' '}
          <strong>
            {month} {year}
          </strong>
          .
        </SavingPlan>
      </Result>
      <ButtonPosition>
        <Button>Confirm</Button>
      </ButtonPosition>
    </SavingGoalCard>
  );
};

export default SavingGoalContainer;
