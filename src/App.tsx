import * as React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import { GlobalStyle } from './styles/global';
import { media } from './styles/mediaQueries';
import homeSVG from './icons/home.svg';
import SavingCard from './components/SavingCard';

const StyledPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f4f8fa;
  min-height: 100vh;
`;

const StyledTitle = styled.h1`
  color: #1b31a8;
  font-size: 1.8rem;
  line-height: 1.44;
  margin-top: 2.3rem;
  margin-bottom: 2.4rem;

  ${media.desktop} {
    font-size: 2.4rem;
    line-height: 1.33;
    margin-top: 5.4rem;
    margin-bottom: 4rem;
  }

  & > strong {
    font-weight: 600;
  }
`;

const StyledSavingCard = styled(SavingCard)`
  align-self: stretch;

  ${media.mobile} {
    flex-grow: 1;
  }

  ${media.desktop} {
    align-self: center;
    width: 56rem;
  }
`;

const App: React.FunctionComponent = () => {
  return (
    <>
      <GlobalStyle />
      <StyledPageContainer>
        <Header />
        <StyledTitle>
          Let&apos;s plan your <strong>saving goal</strong>
        </StyledTitle>
        <StyledSavingCard
          iconSrc={homeSVG}
          iconAlt="Little house with dollar sign on the bottom left"
          title="Buy a house"
        />
      </StyledPageContainer>
    </>
  );
};

export default App;
