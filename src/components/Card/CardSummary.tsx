import React from 'react';
import styled from 'styled-components';
import { toCurrency } from '../MoneyInput/utils';
import { media } from '../../styles/mediaQueries';

interface CardSummaryProps {
  value: number;
  className?: string;
}

const StyledContainer = styled.div`
  border: 0.1rem solid #e1e8ed;
  box-shadow: 0 0.1rem 0.4rem rgba(150, 164, 176, 0.1);
  border-radius: 0.4rem;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledSummaryValueContainer = styled.div`
  margin: 1.6rem 2.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${media.desktop} {
    margin: 1.6rem 3.2rem 1.8rem;
  }
`;

const StyledSummaryValueLabel = styled.span`
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.5;

  ${media.desktop} {
    font-size: 1.8rem;
    line-height: 1.33;
  }
`;

const StyledSummaryValue = styled.span`
  font-weight: 500;
  font-size: 2.6rem;
  line-height: 1.23;
  letter-spacing: -0.02;
  color: #0079ff;

  ${media.desktop} {
    font-size: 4rem;
    line-height: 0.8;
  }
`;

const StyledChildrenContainer = styled.div`
  padding: 1.6rem 2.4rem;
  background: #f4f8fa;
  font-size: 1.2rem;
  line-height: 1.33;

  & > strong {
    font-weight: 600;
  }

  ${media.desktop} {
    padding: 1.6rem 3.2rem 1.8rem;
  }
`;

const CardSummary: React.FC<CardSummaryProps> = ({
  value,
  children,
  className
}) => (
  <StyledContainer className={className}>
    <StyledSummaryValueContainer>
      <StyledSummaryValueLabel>Monthly</StyledSummaryValueLabel>
      <StyledSummaryValue>
        {value ? toCurrency(value, false) : '-'}
      </StyledSummaryValue>
    </StyledSummaryValueContainer>
    <StyledChildrenContainer>{children}</StyledChildrenContainer>
  </StyledContainer>
);

export default CardSummary;
