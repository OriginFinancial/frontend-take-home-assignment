import React from 'react';
import styled from 'styled-components';
import Card from '../Card';
import CardIcon from '../Card/CardIcon';
import MoneyInput from '../MoneyInput';
import DateInput from '../DateInput';
import Button from '../Button';
import CardTitle from '../Card/CardTitle';
import CardSubtitle from '../Card/CardSubtitle';
import CardSummary from '../Card/CardSummary';
import { media } from '../../styles/mediaQueries';
import { toCurrency } from '../MoneyInput/utils';
import { monthsDiffFromToday, months } from '../../utils/date';

const StyledCardTitle = styled(CardTitle)`
  margin-top: 0.4rem;
`;

const StyledCardSubtitle = styled(CardSubtitle)`
  ${media.desktop} {
    margin-top: 0.2rem;
  }
`;

const StyledInputTitle = styled.div`
  font-size: 1.6rem;
  line-height: 1.25rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
`;

const StyledInputsContainer = styled.div`
  margin-top: 3.6rem;

  ${media.desktop} {
    display: flex;
    justify-content: space-between;
    margin-top: 4rem;
  }
`;

const StyledDateInputContainer = styled.div`
  ${media.mobile} {
    margin-top: 1.6rem;
  }
  ${media.desktop} {
    width: calc(50% - 0.85rem);
  }
`;

const StyleMoneyInputContainer = styled.div`
  ${media.desktop} {
    width: calc(50% - 0.85rem);
  }
`;

const StyledSummary = styled(CardSummary)`
  margin-top: 3rem;
`;

const StyledButton = styled(Button)`
  margin-top: 3.6rem;

  ${media.desktop} {
    margin-top: 3.1rem;
    align-self: center;
  }
`;

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
`;

interface SavingCardProps {
  iconSrc: string;
  iconAlt: string;
  title: string;
}

const SavingCard: React.FC<SavingCardProps> = ({
  iconSrc,
  iconAlt,
  title,
  className
}) => {
  const [moneyValue, setMoneyValue] = React.useState(25000);
  const today = new Date();
  const [month, setMonth] = React.useState(today.getMonth());
  const [year, setYear] = React.useState(today.getFullYear());

  const monthsToPay = monthsDiffFromToday(year, month);
  const monthlyPayment =
    monthsToPay === 0 ? null : (moneyValue / monthsToPay).toFixed(0);

  return (
    <StyledCard className={className}>
      <CardIcon src={iconSrc} alt={iconAlt} />
      <StyledCardTitle>{title}</StyledCardTitle>
      <StyledCardSubtitle>Saving goal</StyledCardSubtitle>
      <StyledInputsContainer>
        <StyleMoneyInputContainer>
          <StyledInputTitle>Total amount</StyledInputTitle>
          <MoneyInput value={moneyValue} onChange={setMoneyValue} />
        </StyleMoneyInputContainer>
        <StyledDateInputContainer>
          <StyledInputTitle>Reach goal by</StyledInputTitle>
          <DateInput
            month={month}
            year={year}
            setMonth={setMonth}
            setYear={setYear}
          />
        </StyledDateInputContainer>
      </StyledInputsContainer>
      <StyledSummary value={monthlyPayment}>
        {`You’re planning `}
        <strong>
          {monthsToPay} monthly {monthsToPay === 1 ? 'deposit' : 'deposits'}
        </strong>
        {` to reach your `}
        <strong>{toCurrency(moneyValue, false)}</strong>
        {` goal by `}
        <strong>
          {months[month]} {year}.
        </strong>
      </StyledSummary>
      <StyledButton>Confirm</StyledButton>
    </StyledCard>
  );
};

export default SavingCard;
