import * as React from 'react';
import styled from 'styled-components';
import { StoreContext } from '../store/store';

interface CurrencyMask {
  (value: string): string;
}

interface Iprops {
  currencyMask: CurrencyMask;
  months: string[];
}

const Result: React.FunctionComponent<Iprops> = ({
  currencyMask,
  months
}: Iprops) => {
  const Container = styled.section`
    margin: 19px 0;
    height: 119px;
    width: 100%;
    border: 1px solid #e1e8ed;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h4 {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 10px 38px;
      @media (max-width: 390px) {
        font-size: 1.6rem;
        margin: 10px 26px;
      }
    }
    span {
      font-size: 32px;
      color: #0079ff;
      font-weight: 500;
    }
    p {
      background-color: #f4f8fa;
      height: 46px;
      font-size: 1.2rem;
      padding: 4px 35px;
      @media (max-width: 370px) {
        padding: 4px 26px;
      }
    }
  `;

  const { state } = React.useContext(StoreContext);

  return (
    <Container>
      <h4>
        Monthly amount{' '}
        <span>
          $
          {Math.round(+state.amount) === 0 || state.goal.period === 0
            ? '0.00'
            : currencyMask(
                (+state.amount.replace(/,/g, '') / state.goal.period).toFixed(2)
              )}
        </span>
      </h4>
      <p>
        You’re planning <b>{state.goal.period} monthly deposits </b>to reach
        your <b>${currencyMask(state.amount)} </b>
        goal by{' '}
        <b>
          {months[state.goal.month]} {state.goal.year}
        </b>
        .
      </p>
    </Container>
  );
};

export default Result;
