/* eslint-disable react/no-unescaped-entities */
import * as React from 'react';
import { format, differenceInCalendarMonths, addMonths, isBefore } from 'date-fns';
import Header from '~/components/Header';
import MoneyInput from '~/components/MoneyInput';
import MonthInput from '~/components/MonthInput';
import Button from '~/components/Button';
import house from '~/icons/house.svg';
import {
  Title,
  SubTitle,
  Card,
  Description,
  InputsWrapper,
  GoalDetails,
  Month,
  MonthlyAmount,
  DetailsDescription,
  XsHidden
} from './styles';

const Goal: React.FC = () => {
  const today = new Date();
  const [totalAmount, setTotalAmount] = React.useState<string>('');
  const [selectedDate, setSelectedDate] = React.useState<Date>(addMonths(today, 1));

  const distanceInMonths = differenceInCalendarMonths(selectedDate, today);
  const monthlyAmount = '' + parseStringToFloat(totalAmount) / distanceInMonths;
  const goalDate = format(selectedDate, 'MMMM uuuu');

  function parseStringToFloat(value: string): number {
    return value ? parseFloat(value.replace(/,/g, '')) : 0;
  }

  function formatStringToCurrency(value: string): string {
    return new Intl.NumberFormat('en', {
      style: 'currency',
      currency: 'USD'
    }).format(parseStringToFloat(value));
  }

  return (
    <React.Fragment>
      <Header />
      <Title>
        Let's plan your <strong>saving goal.</strong>
      </Title>
      <Card>
        <img src={house} alt="house" />
        <SubTitle>Buy a house</SubTitle>
        <Description>Saving goal</Description>

        <InputsWrapper>
          <MoneyInput id="total-amount" label="Total amount" setAmount={setTotalAmount} />
          <MonthInput
            label="Reach goal by"
            selectedDate={selectedDate}
            setDate={setSelectedDate}
            isPastDisabled={isBefore(selectedDate, addMonths(today, 1))}
          />
        </InputsWrapper>

        <GoalDetails>
          <Month>
            Monthly <XsHidden>amount</XsHidden>
          </Month>
          <MonthlyAmount>{formatStringToCurrency(monthlyAmount)}</MonthlyAmount>
          <DetailsDescription>
            You're planning <strong>{distanceInMonths} monthly deposits</strong> to reach your{' '}
            <strong>{formatStringToCurrency(totalAmount)}</strong> goal by <strong>{goalDate}.</strong>
          </DetailsDescription>
        </GoalDetails>

        <Button text="Confirm" />
      </Card>
    </React.Fragment>
  );
};

export default Goal;
