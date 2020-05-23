import * as React from 'react';
import styled from 'styled-components';
import GlobalStyle from './globalStyle';
import Header from './components/Header';

const ParagraphStyle = styled.p`
  text-align: center;
  margin-top: 5%;
  margin-bottom: 5%;
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
      <GlobalStyle />
      <Header />
      <ParagraphStyle>
        Let&apos;s plan your <strong>saving goal</strong>
      </ParagraphStyle>
    </div>
  );
};

export default App;
