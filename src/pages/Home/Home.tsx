import * as React from 'react';
import styled from 'styled-components';

import { KeyboardEvent, MonthYear } from '../../models';
import * as utils from '../../utils';
import { SavingGoalForm } from '../../components';

const Home: React.FunctionComponent = () => {
  const [amount, setAmount] = React.useState<string>('');
  const [totalOfMonths, setTotalOfMonths] = React.useState<number>(null);
  const [monthlyAmount, setMonthlyAmount] = React.useState<string>('');
  const [isPrevButtonDisabled, setPrevButtonDisabled] = React.useState<boolean>(
    true
  );
  const [selectedDate, setSelectedDate] = React.useState<MonthYear>({
    month: '',
    year: null
  });
  const isItPreviousDate = utils.date.isItPreviousDate(selectedDate);
  const monthsDifferenceBetweenDates = utils.date.getMonthsDifferenceUntillDate(
    selectedDate
  );

  React.useEffect(() => {
    const { month, year } = utils.date.getCurrentDate();
    setSelectedDate({
      month,
      year
    });
  }, []);

  React.useEffect(() => {
    setMonthlyAmount(utils.currency.calcMonthlyAmount(amount, totalOfMonths));
  }, [amount, totalOfMonths]);

  React.useEffect(() => {
    setPrevButtonDisabled(isItPreviousDate);
    setTotalOfMonths(monthsDifferenceBetweenDates);
  }, [selectedDate]);

  const handlePressNextDate = () => {
    const { month, year } = utils.date.getNextDate(selectedDate);
    setSelectedDate({
      month,
      year
    });
  };

  const handlePressPreviousDate = () => {
    const { month, year } = utils.date.getPreviousDate(selectedDate);

    setSelectedDate({
      month,
      year
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const formatedCurrency = utils.currency.formatToDollars(
      e.currentTarget.value
    );
    setAmount(formatedCurrency);
  };

  const handlePressKeyboardArrows = (e: KeyboardEvent): void => {
    switch (e.keyCode) {
      case 37: {
        if (!isPrevButtonDisabled) handlePressPreviousDate();
        break;
      }
      case 39: {
        handlePressNextDate();
        break;
      }
      default:
        return null;
    }
  };

  return (
    <div>
      <div>
        <Heading>
          Let&apos;s plan you <b>saving goal.</b>
        </Heading>
      </div>

      <SavingGoalForm
        data={{
          amount,
          selectedDate,
          isPrevButtonDisabled,
          totalOfMonths,
          monthlyAmount
        }}
        actions={{
          handleInputChange,
          handlePressNextDate,
          handlePressPreviousDate,
          handlePressKeyboardArrows
        }}
      />
    </div>
  );
};

const Heading = styled.p`
  color: ${props => props.theme.colors.primary.main};
  text-align: center;
  margin: 2.4rem 0;

  ${props => props.theme.media.md} {
    margin: 3.2rem 0 2.4rem 0;
  }
`;

export default Home;
