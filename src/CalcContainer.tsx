import * as React from 'react';
import styled from 'styled-components';
import houseSavings from './icons/houseSavings.svg';
import arrowRight from './icons/arrowRight.svg';
import arrowLeft from './icons/arrowLeft.svg';

const CalcContainer: React.FunctionComponent = () => {
  const Container = styled.div`
    background: #ffffff;
    border: 0.1rem solid #e1e8ed;
    box-shadow: 0px 1px 4px rgba(150, 164, 176, 0.1);
    border-radius: 0.8rem;
    width: 521px;
    min-width: 360px;
    max-width: 560px;
    height: 444px;
    max-height: 600px;
    padding: 25px;
    @media (max-width: 530px) {
      width: 100%;
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
    }
    > span {
      color: #657786;
    }
  `;

  const Calc = styled.section`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    margin: 1.1rem 0;
    font-weight: 500;
  `;

  const Field = styled.div`
    display: flex;
    height: 56px;
    flex-direction: row;
    width: 220px;
    border: 1px solid #e1e8ed;
    border-radius: 4px;
    font-size: 2rem;
    justify-content: space-between;
    span {
      width: 56px;
      text-align: center;
      padding: 8px;
      background-color: #f4f8fa;
      font-size: 22px;
      border-right: inherit;
      color: #657786;
    }
    button {
      width: 48px;
      background-color: #e1e8ed;
      border: none;
    }
  `;

  const InputNumber = styled.input`
    border: none;
    font-size: 2rem;
    width: 162px;
    padding-left: 1rem;
    font-weight: 600;
    :focus {
      outline: none;
    }
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    ::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    -moz-appearance: textfield;
  `;

  const DateGoal = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: 600;
    text-align: center;
    span {
      font-size: 1.6rem;
      font-weight: 400;
      background-color: white;
      padding: 0;
      margin: -8px 12px;
    }
  `;

  const Result = styled.section`
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
      padding: 4px 36px;
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
  `;

  interface Date {
    month: string;
    year: string;
  }

  const [amount, setAmount] = React.useState(25000);
  const [date, setDate] = React.useState<Date>({
    month: 'October',
    year: '2020'
  });

  return (
    <Container>
      <Title>
        <img src={houseSavings} alt="House Savings Icon" />
        <h2>Buy a house</h2>
        <span>saving goal</span>
      </Title>
      <Calc>
        <div>
          <label>Total amount</label>
          <Field>
            <span>$</span>
            <InputNumber
              name="Total amount"
              value={amount}
              onChange={e => setAmount(e.target.value)}
              type="number"
              autoFocus
            />
          </Field>
        </div>
        <div>
          <label>Reach goal by</label>
          <Field>
            <button
              onClick={() =>
                setDate({
                  month: 'September',
                  year: '2020'
                })
              }
            >
              <img src={arrowLeft} alt="Click Backward" />
            </button>
            <DateGoal>
              {date.month}
              <span>{date.year}</span>
            </DateGoal>
            <button>
              <img src={arrowRight} alt="Click Forward" />
            </button>
          </Field>
        </div>
      </Calc>
      <Result>
        {/* <div> */}
        <h4>
          Monthly amount <span>$521</span>
        </h4>
        {/* </div> */}
        {/* <div> */}
        <p>
          You’re planning <b>48 monthly deposits </b>
          to reach your <b>$25,000 </b>
          goal by
          <b>
            {' '}
            {date.month} {date.year}
          </b>
          .
        </p>
        {/* </div> */}
      </Result>
      <SubmitButton disabled>Confirm</SubmitButton>
    </Container>
  );
};

export default CalcContainer;
