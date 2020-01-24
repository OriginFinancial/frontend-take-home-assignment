import styled, { css } from 'styled-components';

const cardMediaStyle = ({ alignItems = 'center', direction = 'column' }) => css`
  background-color: #fff;
  display: flex;
  flex-direction: ${direction};
  align-items: ${alignItems};
  justify-content: ${alignItems};
  padding-bottom: 10px;
`;

export { cardMediaStyle };

const CardMedia = styled.div`
  ${cardMediaStyle};
`;

export { CardMedia };
