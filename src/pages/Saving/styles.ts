import styled from 'styled-components';
import DatePicker from 'react-datepicker';

export const AmountInput = styled.input`
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  cursor: pointer;
  height: inherit;
  padding-left: 10px;
  border: #e1e8ed 1px solid;
  font-weight: 600;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  width: 180px;
  grid-column: 2 4;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  width: 80vw;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 400px;
  }
`;

export const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 10px;
  width: 100%;
  align-items: center;
  color: #1b31a8;

  @media (min-width: 768px) {
    grid-gap: 20px;
  }
`;

export const BackButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: #e1e8ed 1px solid;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 20%;
  }
`;

export const GoalCard = {
  Paper: styled.div`
    background-color: #ffffff;
    padding: 20px;
    border: #e1e8ed 1px solid;
    border-radius: 5px;
    margin: 15px 0;
    display: grid;
    grid-template-columns: 2;
    grid-column-gap: 5px;
    grid-row-gap: 10px;

    small {
      color: #657786;
      font-size: 12px;
    }
  `,
  Image: styled.img`
    height: 30px;
  `,
  Title: styled.h3`
    font-size: 18px;
    font-weight: 600;
  `,
  Form: styled.form`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 8px;
    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
  `,
  Field: styled.div`
    display: flex;
    flex-direction: column;
  `,
  FieldLabel: styled.label`
    grid-column: 1/1;
    font-size: 12px;
    font-weight: 600;
    width: 100%;
    margin: 5px 0;
  `,
  FieldBox: styled.div`
    display: grid;
    grid-template-columns: 30px 150px 30px;
    grid-auto-rows: 40px 0;
    align-items: center;
    height: 40px;
    span {
      background-color: #eff7ff;
      border: 1px solid #e1e8ed;
      color: #657786;
      font-size: 15px;
      height: inherit;
      line-height: 40px;
      vertical-align: middle;
      padding: auto;
      text-align: center;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
  `,
  BackButton: styled.button`
    grid-column: 1fr;
    width: 30px;
    height: 40px;
    background-color: #eff7ff;
    border: 1px solid #e1e8ed;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    cursor: pointer;
    img {
      height: 10px;
    }
  `,
  Content: styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-auto-rows: 50%;
    justify-content: center;
    text-align: center;
    border: 1px solid #e1e8ed;
    border-right: none;
    border-left: none;
    strong {
      font-weight: 500;
    }
  `,
  ForwardButton: styled.button`
    grid-column: 3 4;
    width: 30px;
    height: 40px;
    background-color: #eff7ff;
    border: 1px solid #e1e8ed;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    cursor: pointer;
    img {
      height: 10px;
    }
  `,
  Calendar: styled(DatePicker)`
    height: 40px;
    grid-column: 2 5;
    background-color: transparent;
    color: transparent;
    position: absolute;
    left: 30px;
    width: 150px;
    bottom: 0;
    z-index: 10;
    grid-column: 5fr;
    border: 0;
    cursor: pointer;
  `,
  MonthlyBox: styled.div`
    grid-column: 1/-1;
    display: grid;
    grid-template-columns: 2fr;
    justify-content: center;
  `,
  MonthlyAmount: styled.div`
    padding: 20px;
    border: 1px solid #e1e8ed;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    display: grid;
    grid-column: 1/-1;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 60px 40px;
    justify-content: space-between;
    align-items: center;
    h5 {
      font-weight: 500;
    }
    p {
      color: #0079ff;
      text-align: right;
      font-size: 20px;
      @media (min-width: 768px) {
        font-size: 30px;
      }
    }
  `,
  Button: styled.button`
    grid-column: 1/-1;
    color: #ffffff;
    font-weight: 600;
    background-color: #1b31a8;
    border: 0;
    border-radius: 30px;
    padding: 8px 40px;
    cursor: pointer;
    margin: 0 50px;
  `,
  Planning: styled.div`
    background-color: #eff7ff;
    padding: 20px;
    border: 1px solid #e1e8ed;
    border-top: none;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    grid-column: 1/-1;
    font-size: 12px;
  `
};
