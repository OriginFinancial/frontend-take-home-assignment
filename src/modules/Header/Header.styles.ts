import { css } from 'styled-components';

const header = () => css`
  display: flex;
  flex-direction: column;
`;

const title = () => css`
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -0.26px;
  margin: 8px 0 2px 0;

  @media (max-width: 360px), screen and (orientation: portrait) {
    font-size: 24px;
  }
`;

const subtitle = () => css`
  font-weight: normal;
  font-size: 16px;
  color: #657786;

  @media (max-width: 360px), screen and (orientation: portrait) {
    font-size: 14px;
  }
`;

export { header, title, subtitle };
