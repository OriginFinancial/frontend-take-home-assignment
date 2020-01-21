import styled, { css } from 'styled-components';

const cardStyle = css`
  background-color: #fff;
  border: 1px solid #aab8c2;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 4em 1em;
`;

export { cardStyle };

const Card = styled.div`
  ${cardStyle};
`;

export { Card };
