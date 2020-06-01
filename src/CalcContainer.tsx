import * as React from 'react';
import styled from 'styled-components';
import Calc from './components/Calc';
import Result from './components/Result';
import houseSavings from './icons/houseSavings.svg';

const CalcContainer: React.FunctionComponent = () => {
  const Container = styled.div`
    background: #ffffff;
    border: 0.1rem solid #e1e8ed;
    box-shadow: 0px 1px 4px rgba(150, 164, 176, 0.1);
    border-radius: 0.8rem;
    width: 521px;
    min-width: 320px;
    max-width: 560px;
    height: 444px;
    max-height: 600px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    @media (max-width: 530px) {
      width: 100%;
      height: 100%;
    }
  `;

  const Title = styled.section`
    width: 100%;
    img {
      min-height: 32px;
      height: 4vw;
      max-height: 40px;
    }
    h2 {
      font-size: 3.2rem;
      margin-top: -1%;
      margin-bottom: -2%;
      @media (max-width: 530px) {
        font-size: 6vw;
      }
      @media (max-width: 380px) {
        font-size: 2.4rem;
      }
    }
    > span {
      color: #657786;
      @media (max-width: 380px) {
        font-size: 1.4rem;
      }
    }
  `;

  const SubmitButton = styled.button`
    width: 417px;
    height: 43px;
    border-radius: 32px;
    border: none;
    background-color: #1b31a8;
    color: #ffffff;
    font-size: 1.7rem;
    font-weight: 600;
    @media (max-width: 380px) {
      width: 100%;
    }
  `;

  return (
    <Container>
      <Title>
        <img src={houseSavings} alt="House Savings Icon" />
        <h2>Buy a house</h2>
        <span>saving goal</span>
      </Title>
      <Calc />
      <Result />
      <SubmitButton disabled>Confirm</SubmitButton>
    </Container>
  );
};

export default CalcContainer;
