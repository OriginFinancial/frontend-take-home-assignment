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

const Paragraph = styled.p`
  text-align: center;
  margin: 3%;
  font-size: 18px;
  color: #1b31a8;

  @media (min-width: 1440px) {
    font-size: 24px;
  }
`;

const App: React.FC = () => {
  return (
    <div>
      <GlobalStyle />
      <PageStyle>
        <Header />
        <Paragraph>
          Let&apos;s plan your <strong>saving goal</strong>
        </Paragraph>
        <SavingGoalCard />
      </PageStyle>
    </div>
  );
};

export default App;
