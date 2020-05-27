import React from 'react';
import styled from 'styled-components';

const ResultContainer = styled.div`
  width: 312px;
  height: 134px;
  display: flex;
  flex-direction: column;
  border: 1px solid #e1e8ed;
  border-radius: 4px;

  @media (min-width: 801px) {
    width: 480px;
    height: 168px;
  }
`;

const MonthlyAmount = styled.div`
  width: 310px;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 20px;
  background: #ffffff;
  h4 {
    font-weight: 500;
  }
  p {
    color: #0079ff;
    font-weight: 500;
    font-size: 26px;
  }

  @media (min-width: 801px) {
    width: 478px;
    height: 102px;
  }
`;

const SavingPlaning = styled.p`
  width: 310px;
  height: 70px;
  padding: 16px;
  background: #f4f8fa;
  font-size: 12px;

  @media (min-width: 801px) {
    width: 478px;
    height: 66px;
  }
`;

const Result: React.FC = () => {
  return (
    <ResultContainer>
      <MonthlyAmount>
        <h4>Monthly Amount</h4>
        <p>$ xxxx</p>
      </MonthlyAmount>
      <SavingPlaning>
        You&apos;re planning <strong>xxx monthly deposits</strong> to reach your{' '}
        <strong> $xxx</strong> goal by <strong>xxx</strong>.
      </SavingPlaning>
    </ResultContainer>
  );
};

export default Result;
