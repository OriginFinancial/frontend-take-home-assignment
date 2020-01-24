import styled, { css } from 'styled-components';

const cardStyle = ({
  alignItems = 'center',
  minHeight = '15em',
  padding = '1em'
}) => css`
  background-color: #fff;
  border: 1px solid #e1e8ed;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: ${alignItems};
  justify-content: ${alignItems};
  box-sizing: border-box;
  min-height: ${minHeight};
  padding: ${padding};
`;

export { cardStyle };

const Card = styled.div`
  ${cardStyle};
`;

export { Card };
