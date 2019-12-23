import styled from 'styled-components';

const Card = {
  Box: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background: #ffffff;
    border: #e1e8ed 1px solid;
    border-radius: 5px;
    padding: 20px;
    margin: 10px;
    width: 200px;
    min-height: 160px;
  `,

  Title: styled.h3`
    font-size: 14px;
    font-weight: 500;
    padding: 5px 0;
  `,

  Button: styled.button`
    color: #ffffff;
    background-color: #1b31a8;
    border: 0;
    border-radius: 30px;
    padding: 5px 30px;
  `
};

export default Card;
