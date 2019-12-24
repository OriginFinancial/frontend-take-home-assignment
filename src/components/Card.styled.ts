import styled from 'styled-components';

const Card = {
  Wrapper: styled.div`
    width: fit-content;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-auto-flow: row;
    grid-gap: 5px;
    @media (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
      /* justify-items: center; */
    }
    @media (min-width: 992px) {
      grid-template-columns: repeat(4, 1fr);
    }
  `,

  Title: styled.h2`
    grid-column: 1/1;
    font-family: Rubik, sans-serif;
    color: #1d1e1f;
    font-weight: 500;
    justify-self: start;
    padding: 40px 10px 10px;
    @media (min-width: 768px) {
      font-size: 28px;
      grid-column: 4/1;
    }
    @media (min-width: 992px) {
      grid-column: 5/1;
    }
  `,

  Box: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background: #ffffff;
    border: #e1e8ed 1px solid;
    border-radius: 10px;
    padding: 20px;
    margin: 10px;
    min-height: 180px;
    min-width: 200px;
  `,

  Head: styled.div`
    display: flex;
    flex-direction: column;
  `,

  Body: styled.div`
    display: flex;
    flex-direction: column;
  `,

  Image: styled.img`
    height: 40px;
    width: 40px;
  `,

  Text: styled.h3`
    font-size: 14px;
    font-weight: 500;
    padding: 5px 0;
  `,

  Button: styled.button`
    color: #ffffff;
    background-color: #1b31a8;
    border: 0;
    border-radius: 30px;
    padding: 8px 40px;
  `
};

export default Card;
