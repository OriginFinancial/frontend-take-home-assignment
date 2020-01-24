import styled, { css } from 'styled-components';

const cardContentStyle = css`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export { cardContentStyle };

const CardContent = styled.div`
  ${cardContentStyle};
`;

export { CardContent };
