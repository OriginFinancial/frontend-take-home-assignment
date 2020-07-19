import { css } from 'styled-components';

const headerText = () => css`
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 24px;
  color: #1b31a8;

  @media (max-width: 360px), screen and (orientation: portrait) {
    margin: 24px auto;
    font-size: 18px;
  }
`;

export { headerText };
