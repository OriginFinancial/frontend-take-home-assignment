import * as React from 'react';
import styled from 'styled-components';
import GlobalStyle from './globalStyle';
import Header from './components/Header';
import SavingGoalCard from './components/SavingGoalCard';

const PageStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ParagraphStyle = styled.p`
  text-align: center;
  margin-top: 3%;
  margin-bottom: 3%;
  font-style: normal;
  font-size: 18px;
  letter-spacing: -0.2px;
  color: #1b31a8;

  @media (min-width: 1440px) {
    font-size: 24px;
  }
`;

const App: React.FC = () => {
  return (
    <div>
      <PageStyle>
        <GlobalStyle />
        <Header />
        <ParagraphStyle>
          Let&apos;s plan your <strong>saving goal</strong>
        </ParagraphStyle>
        <SavingGoalCard />
      </PageStyle>
    </div>
  );
};

export default App;
