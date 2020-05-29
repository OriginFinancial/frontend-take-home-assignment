import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import CalcContainer from './components/CalcContainer';
import logo from './icons/logo.svg';

const App: React.FunctionComponent = () => {
  const GlobalStyle = createGlobalStyle `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    html {
      font-size: 62.5%
    }
    body {
      line-height: 1.6;
      background-color: #F2F2F2;
      font-size: 1.8rem;
      font-family: Work Sans, sans-serif;
      display: flex;
      flex-direction: column;
      text-align: center;
      height: 100%;
    }
  `;
  const Logo = styled.header`
    width: 100%;
    height: 9%;
    padding: 1rem 3.7rem;
    background-color: white;
    display: flex;
    align-items: center;
  `;

  const Title = styled.h1`
    color: #1B31A8;
    font-size: 2.4rem;
    margin-top: 12%;
    margin-bottom: 5%;
    span {
      font-weight: 600;
    }
  `;

  return (
    <>
    <GlobalStyle />
    <Logo>
      <img src={logo} alt="Logo"/>
    </Logo>
    <Title>
      Let's plan your <span>saving goal</span>.
    </Title>
    <CalcContainer />
    </>
  );
};

export default App;
