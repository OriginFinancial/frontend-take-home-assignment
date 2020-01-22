import styled, { css } from 'styled-components';

const cardStyle = ({ alignItems = 'center' }) => css`
  background-color: #fff;
  border: 1px solid #f4f8fa;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: ${alignItems};
  justify-content: ${alignItems};
  box-sizing: border-box;
  padding: 1.5em;
`;

export { cardStyle };

const Card = styled.div`
  ${cardStyle};
`;

export { Card };
