import styled, { css } from 'styled-components';

const cardMediaStyle = ({ alignItems = 'center' }) => css`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: ${alignItems};
  justify-content: ${alignItems};
  padding-bottom: 10px;
`;

export { cardMediaStyle };

const CardMedia = styled.div`
  ${cardMediaStyle};
`;

export { CardMedia };
