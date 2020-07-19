import { css } from 'styled-components';

const submitButton = css`
  width: 444px;
  background: #1b31a8;
  border: none;
  border-radius: 32px;
  padding: 16px 145px;
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  align-self: center;
  cursor: pointer;

  @media (max-width: 360px), screen and (orientation: portrait) {
    width: 328px;
  }
`;

export { submitButton };
