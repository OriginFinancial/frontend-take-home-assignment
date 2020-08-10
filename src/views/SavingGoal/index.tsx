import React, { useEffect, useState } from 'react';
import homeIcon from '../../icons/home.svg';
import {
  Main,
  ConfirmButton,
  Header,
  HomeIcon,
  SavingsContainer,
  ContainerSubtitle,
  ContainerTitle,
  ResultContainer,
  ResultMessage,
  MonthlyAmountContainer,
  Amount,
  InputsContainer,
  SCurrencyField,
  SDateField
} from './styles';

import { currencyFormatter } from '../../helpers/formatters';
import { differenceInCalendarMonths, addMonths } from 'date-fns';

const SavingGoal = () => {
  const TODAY_DATE = new Date();
  const [savingAmount, setSavingAmount] = useState(0);
  const [goalDate, setGoalDate] = useState(addMonths(TODAY_DATE, 1));
  const [monthlyAmount, setMonthlyAmount] = useState(0);

  useEffect(() => {
    const monthDiff: number = differenceInCalendarMonths(goalDate, TODAY_DATE);
    const monthlyAmountResult: number =
      monthDiff > 0 ? savingAmount / monthDiff : savingAmount;
    setMonthlyAmount(monthlyAmountResult);
  }, [TODAY_DATE, goalDate, savingAmount]);

  const setDate = (value: Date): void => {
    setGoalDate(value);
  };

  return (
    <Main>
      <Header>
        {"Let's plan your"} <strong>saving goal.</strong>
      </Header>
      <SavingsContainer>
        <HomeIcon src={homeIcon} />
        <ContainerTitle>Buy a house</ContainerTitle>
        <ContainerSubtitle>Saving goal</ContainerSubtitle>

        <InputsContainer>
          <SCurrencyField
            onChange={(value: number) => setSavingAmount(value)}
            value={savingAmount}
          />
          <SDateField value={goalDate} onChange={setDate} />
        </InputsContainer>

        <ResultContainer>
          <MonthlyAmountContainer>
            <span>Monthly amount</span>
            <Amount>{currencyFormatter(monthlyAmount)}</Amount>
          </MonthlyAmountContainer>
          <ResultMessage>
            You're planning{' '}
            <strong>
              {differenceInCalendarMonths(goalDate, TODAY_DATE)} monthly
              deposits
            </strong>{' '}
            to reach your <strong>{currencyFormatter(savingAmount)}</strong>{' '}
            goal by{' '}
            <strong>
              {goalDate.toLocaleString('default', {
                month: 'long',
                year: 'numeric'
              })}
            </strong>
          </ResultMessage>
        </ResultContainer>
        <ConfirmButton onClick={() => alert('You won $1M')}>
          Confirm
        </ConfirmButton>
      </SavingsContainer>
    </Main>
  );
};

export default SavingGoal;
