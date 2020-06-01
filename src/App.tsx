import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { StoreContextProvider } from './store/store';
import CalcContainer from './CalcContainer';
import logo from './icons/logo.svg';

const App: React.FunctionComponent = () => {
  const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }
    html {
      font-size: 62.5%;
      box-sizing: border-box;
    }
    body {
      background-color: #F2F2F2;
      color: #1C1E1F;
      font: 400 1.6rem Work Sans, sans-serif;
      line-height: 1.6;
      > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100vh;
        max-height: 100vh;
      }
    }
  `;

  const Logo = styled.header`
    width: 100%;
    height: 7vw;
    min-height: 43px;
    max-height: 56px;
    padding-left: 2.7%;
    background-color: white;
    display: flex;
    align-items: center;
    img {
      min-height: 16px;
      height: 4vw;
      max-height: 24px;
    }
  `;

  const Title = styled.h1`
    font-size: 2.4rem;
    font-weight: unset;
    color: #1b31a8;
    margin-top: 38px;
    margin-bottom: 28px;
    @media (max-width: 530px) {
      font-size: 4.5vw;
      margin-top: 7%;
      margin-bottom: 6%;
    }
    @media (max-width: 370px) {
      font-size: 1.8rem;
    }
  `;

  return (
    <>
      <GlobalStyle />
      <Logo>
        <img src={logo} alt="Logo" />
      </Logo>
      <Title>
        Let’s plan your <b>saving goal</b>.
      </Title>
      <StoreContextProvider>
        <CalcContainer />
      </StoreContextProvider>
    </>
  );
};

export default App;
