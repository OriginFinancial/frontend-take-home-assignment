import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { number, object } from 'prop-types';
import Styled from 'styled-components';
import { Typography } from '../Typography';
import { InfoBox } from '../InfoBox';

const propTypes = {
  amount: number.isRequired,
  reachDate: object.isRequired
};

const Wrapper = Styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 2em 3em;
`;

const Resume = Styled.div`
  background-color: #f4f8fa;
  padding: 2em 3em;
  font-size: 12px;
`;

function monthDiff(dateTo) {
  const dateFrom = dayjs();

  return (
    dateTo.month() - dateFrom.month() + 12 * (dateTo.year() - dateFrom.year())
  );
}

function calcSaving(amount, months) {
  if (!months) return amount;

  return Math.round(amount / months);
}

const Calculator = ({ amount, reachDate }) => {
  const [months, setMonths] = useState(monthDiff(reachDate));
  const [saving, setSaving] = useState(calcSaving(amount, months));
  const [formatedReach, setFormatedReach] = useState('');

  useEffect(() => {
    setMonths(monthDiff(reachDate));
    setSaving(calcSaving(amount, months));
    setFormatedReach(reachDate.format('MMMM YYYY'));
  }, [amount, formatedReach, months, reachDate]);

  return (
    <InfoBox>
      <Wrapper>
        <Typography variant="h3">Monthly amount</Typography>
        <Typography data-testid="saving-amount" variant="h1" color="lightBlue">
          ${saving}
        </Typography>
      </Wrapper>

      <Resume>
        {`You're`} planning{' '}
        <strong data-testid="resume-deposits">{months} monthly deposits</strong>{' '}
        to reach your{' '}
        <strong data-testid="resume-goal-amount">$ {amount}</strong> goal by{' '}
        <strong data-testid="resume-reach">{formatedReach}</strong>.
      </Resume>
    </InfoBox>
  );
};

Calculator.propTypes = propTypes;

export { Calculator };
