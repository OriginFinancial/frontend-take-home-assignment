import styled, { css } from 'styled-components';

const cardActionStyle = css`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export { cardActionStyle };

const CardAction = styled.div`
  ${cardActionStyle};
`;

export { CardAction };
