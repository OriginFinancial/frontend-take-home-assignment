import styled, { css } from 'styled-components';

const cardMediaStyle = css`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
`;

export { cardMediaStyle };

const CardMedia = styled.div`
  ${cardMediaStyle};
`;

export { CardMedia };
