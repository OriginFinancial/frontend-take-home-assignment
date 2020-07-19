import { css } from 'styled-components';

const planningArea = () => css`
  display: flex;
  margin-top: 40px;

  @media (max-width: 360px), screen and (orientation: portrait) {
    flex-wrap: wrap;
  }
`;

export { planningArea };
