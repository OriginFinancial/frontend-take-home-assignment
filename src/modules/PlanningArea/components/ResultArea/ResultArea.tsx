import * as React from 'react';
import {
  resultAreaContainer,
  monthlyAmountArea,
  title,
  monthlyAmount,
  feedbackArea
} from './resultArea.styles';
import styled from 'styled-components';
import { ResultAreaProps } from './interfaces';
import {
  getTotalInstallments,
  moneyMask,
  getInstallmentValue
} from '../../../../utils';
import { MONTHS } from '../../../../consts';

const ResultAreaContainer = styled.section`
  ${resultAreaContainer};
`;

const Title = styled.p`
  ${title};
`;

const MonthlyAmount = styled.p`
  ${monthlyAmount};
`;

const MontlhyAmountArea = styled.div`
  ${monthlyAmountArea};
`;

const FeedbackArea = styled.div`
  ${feedbackArea};
`;

const ResultArea: React.FunctionComponent<ResultAreaProps> = ({
  deposit,
  month,
  year
}) => {
  const totalMonths = getTotalInstallments(year, month);
  const montlhyInstallment = getInstallmentValue(totalMonths, Number(deposit));

  return (
    <ResultAreaContainer>
      <MontlhyAmountArea>
        <Title>Monthly amount</Title>
        <MonthlyAmount>{`$${moneyMask(montlhyInstallment)}`}</MonthlyAmount>
      </MontlhyAmountArea>
      <FeedbackArea>
        {`You're planning ${deposit === 0 ? deposit : totalMonths}
          ${
            totalMonths === 1 && deposit !== 0 ? 'deposit' : 'deposits'
          } to reach your $${moneyMask(deposit)}
          goal by ${MONTHS[month]} ${year}.`}
      </FeedbackArea>
    </ResultAreaContainer>
  );
};

export { ResultArea };
