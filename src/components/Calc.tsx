import * as React from 'react';
import styled from 'styled-components';
import arrowRight from '../icons/arrowRight.svg';
import arrowLeft from '../icons/arrowLeft.svg';
import { StoreContext } from '../store/store';

const Calc: React.FunctionComponent = () => {
  const Container = styled.section`
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
      :hover {
        cursor: pointer;
      }
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

  const currencyMask = (value: string) => {
    return value
      .replace(/(.*){1}/, '$1')
      .replace(/[^\d]/g, '')
      .replace(/(\d\d?)$/, '.$1')
      .replace(/^0+(?!\d)(?!$)/, '')
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  };

  const [state, dispatch] = React.useContext(StoreContext);

  return (
    <Container>
      <div>
        <label>Total amount</label>
        <Field>
          <span>$</span>
          <InputNumber
            name="Total amount"
            value={currencyMask(state.amount)}
            onChange={e => dispatch('AMOUNT', e.target.value)}
            type="text"
            placeholder="0.00"
            maxLength="13"
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
    </Container>
  );
};

export default Calc;
