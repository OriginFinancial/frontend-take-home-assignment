import React, { useState } from 'react';

import {
  currencyFormatter,
  monthFormatter,
  yearFormatter
} from '../../../helpers/formatters';
import { monthDiff } from '../../../helpers/utils';

import SimulationType from '../SimulationType';
import InputCurrency from '../InputCurrency';
import DatePicker from '../DatePicker';
import Button from '../Button';

import {
  SavingGoalCard,
  InputFields,
  Result,
  MonthlyAmount,
  SavingPlan,
  ButtonPosition
} from './styles';

const SavingGoalContainer: React.FC = () => {
  const [totalAmount, setTotalAmount] = useState(25000);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const diffMonths = monthDiff(selectedDate, new Date());

  const monthlyAmount = Number((totalAmount / diffMonths).toFixed(0));
  const formattedMonthlyAmount = currencyFormatter(monthlyAmount);

  const formattedTotalAmount = currencyFormatter(totalAmount);

  const month = monthFormatter(selectedDate);
  const year = yearFormatter(selectedDate);

  return (
    <SavingGoalCard>
      <SimulationType />

      <InputFields>
        <InputCurrency value={totalAmount} onChange={setTotalAmount} />
        <DatePicker selectedDate={selectedDate} onChange={setSelectedDate} />
      </InputFields>

      <Result>
        <MonthlyAmount>
          <h4>Monthly Amount</h4>
          <p>${formattedMonthlyAmount}</p>
        </MonthlyAmount>
        <SavingPlan>
          You&apos;re planning <strong>{diffMonths} monthly deposits</strong> to
          reach your <strong> ${formattedTotalAmount}</strong> goal by{' '}
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
