import * as React from 'react';
import styled from 'styled-components';
import arrowRight from '../icons/arrowRight.svg';
import arrowLeft from '../icons/arrowLeft.svg';
import { StoreContext } from '../store/store';
import { Iprops } from '../intefaces/interfaces';

const Calc: React.FunctionComponent<Iprops> = ({
  currencyMask,
  months
}: Iprops) => {
  const Container = styled.section`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    margin: 1.1rem 0;
    font-weight: 500;
    > div {
      @media (max-width: 380px) {
        width: 100%;
      }
    }
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
    @media (max-width: 380px) {
      width: 100%;
    }
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
      :hover:enabled {
        cursor: pointer;
      }
      :active:enabled {
        filter: Brightness(0.6);
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
    @media (max-width: 380px) {
      width: 100%;
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
      margin: -4px 12px;
      @media (max-width: 370px) {
        font-size: 1.4rem;
      }
    }
  `;

  const { state, dispatch } = React.useContext(StoreContext);

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  return (
    <Container>
      <div>
        <label>Total amount</label>
        <Field>
          <span>$</span>
          <InputNumber
            name="Total amount"
            value={currencyMask(state.amount)}
            onChange={e =>
              dispatch({
                type: 'AMOUNT',
                payload: currencyMask(e.target.value)
              })
            }
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
            onClick={() => dispatch({ type: 'BACKWARD_DATE' })}
            disabled={
              state.goal.month === currentMonth &&
              state.goal.year === currentYear
            }
          >
            <img src={arrowLeft} alt="Click Backward" />
          </button>
          <DateGoal>
            {months[state.goal.month]}
            <span>{state.goal.year}</span>
          </DateGoal>
          <button onClick={() => dispatch({ type: 'FORWARD_DATE' })}>
            <img src={arrowRight} alt="Click Forward" />
          </button>
        </Field>
      </div>
    </Container>
  );
};

export default Calc;
