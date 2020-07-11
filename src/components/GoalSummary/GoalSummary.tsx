import * as React from 'react';
import styled from 'styled-components';
import { text } from '../../styles';
import { Paper } from '..';

import { GoalSummaryProps } from '../../models';

const GoalSummary: React.FunctionComponent<GoalSummaryProps> = ({
  data: { amount, selectedDate, totalOfMonths, monthlyAmount }
}) => {
  return (
    <Summary>
      <Paper radiusSmall>
        <SummaryHighlight>
          <SummaryTitle>Monthly amount</SummaryTitle>
          <SummaryValue>${monthlyAmount ? monthlyAmount : '0'}</SummaryValue>
        </SummaryHighlight>

        <SummaryResume>
          {amount ? (
            <>
              You are planning{' '}
              <b>
                {totalOfMonths} monthly{' '}
                {totalOfMonths == 1 ? 'deposit' : 'deposits'}{' '}
              </b>{' '}
              to reach your <b>${amount ? amount : '0'}</b> goal by{' '}
              <b>
                {' '}
                {selectedDate.month} {selectedDate.year}
              </b>
            </>
          ) : (
            <>Type a value and let&apos;s start your plan!</>
          )}
        </SummaryResume>
      </Paper>
    </Summary>
  );
};

const Summary = styled.div`
  margin: 0 0 3.2rem 0;
`;

const SummaryHighlight = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 2.4rem 3.2rem;
`;

const SummaryResume = styled.div`
  background-color: ${props => props.theme.colors.primary.extralight};
  font-size: 1.2rem;
  padding: 1.2rem 3.2rem;
  min-height: 5.4rem;
`;

const SummaryValue = styled.p`
  color: ${props => props.theme.colors.primary.light};
  font-size: 2.4rem;
  font-weight: 700;
  margin: 0;
  max-width: 17rem;
  word-break: break-all;
`;

const SummaryTitle = styled.p`
  color: ${props => props.theme.colors.text.main};
  font-size: 1.8rem;
  font-weight: 500;
  margin: 0;
  word-spacing: ${text.wordSpacing.title};
`;

export default GoalSummary;
