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

import Button from '../../components/Button';
// import CurrencyField from '../../components/CurrencyField';
import { differenceInCalendarMonths, addMonths } from 'date-fns';

const SavingGoal = () => {
  const [savingAmount, setSavingAmount] = useState(0);
  const [goalDate, setGoalDate] = useState(addMonths(new Date(), 1));
  const [monthlyAmount, setMonthlyAmount] = useState(0);
  const TODAY = new Date();

  useEffect(() => {
    const monthDiff: number = differenceInCalendarMonths(goalDate, TODAY);
    const monthlyAmountResult: number =
      monthDiff > 0 ? savingAmount / monthDiff : savingAmount;
    setMonthlyAmount(monthlyAmountResult);
  }, [goalDate, savingAmount]);

  const currencyFormatter = (value: number): string => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 2,
      minimumFractionDigits: 2
    });

    return formatter.format(value).toString();
  };

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
            onChange={value => setSavingAmount(value)}
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
              {differenceInCalendarMonths(goalDate, TODAY)} monthly deposits
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
