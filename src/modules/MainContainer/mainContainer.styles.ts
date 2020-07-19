import { css } from 'styled-components';

const mainContainer = () => css`
  margin: 54px auto 74px auto;
  width: 560px;

  @media (max-width: 360px), screen and (orientation: portrait) {
    margin: 0;
    max-width: 256px;
    padding-bottom: 36px;
  }
`;

export { mainContainer };
