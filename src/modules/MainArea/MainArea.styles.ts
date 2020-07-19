import { css } from 'styled-components';

const mainArea = () => css`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  padding: 40px 40px 50px 40px;
  background: #ffffff;
  font-size: 24px;
  color: #1c1e1f;
  width: 560px;
  border: 1px solid #e1e8ed;
  border-radius: 8px;
  box-shadow: 0px 1px 4px rgba(150, 164, 176, 0.1);

  @media (max-width: 360px), screen and (orientation: portrait) {
    margin-top: 24px;
    max-width: 286px;
  }
`;

export { mainArea };
