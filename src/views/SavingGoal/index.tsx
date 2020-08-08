import React, { useEffect, useState } from 'react';
import {
  Main,
  ConfirmButton,
  Header,
  SavingsContainer,
  ContainerSubtitle,
  ContainerTitle,
  ResultContainer,
  ResultMessage,
  MonthlyAmountContainer,
  Amount,
  InputsContainer
  SCurrencyField,
} from './styles';

import Button from '../../components/Button';
// import CurrencyField from '../../components/CurrencyField';
import DateInput from '../../components/DateInput';

const SavingGoal = () => {
  const [savingAmount, setSavingAmount] = useState(0);
  const [goalDate, setGoalDate] = useState(new Date());

  const setDate = (value: Date): void => {
    setGoalDate(value);
  };

  return (
    <Main>
      <Header>
        {"Let's plan your"} <b>saving goal</b>
      </Header>
      <SavingsContainer>
        <ContainerTitle>Buy a house</ContainerTitle>
        <ContainerSubtitle>Saving goal</ContainerSubtitle>

        <InputsContainer>
          <SCurrencyField
            onChange={e => setSavingAmount(e.target.value)}
            value={savingAmount}
          />
          <DateInput value={goalDate} onChange={setDate} />
        </InputsContainer>

        <ResultContainer>
          <MonthlyAmountContainer>
            <span>Monthly amount</span>
            <Amount>$ 0.00</Amount>
          </MonthlyAmountContainer>
          <ResultMessage>
            {
              "You're planning montly deposits to reach your $ goal by Selected date"
            }
          </ResultMessage>
        </ResultContainer>
        <ConfirmButton onClick={() => setDate('eita')}>Confirm</ConfirmButton>
      </SavingsContainer>
    </Main>
  );
};

export default SavingGoal;
