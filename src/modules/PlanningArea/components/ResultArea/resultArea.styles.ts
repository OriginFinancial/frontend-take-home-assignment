import { css } from 'styled-components';

const resultAreaContainer = css`
  margin: 31px 0;
  border: 1px solid #e1e8ed;
  border-radius: 4px 4px 0 0;
  border-bottom: none;
  box-shadow: 0px 1px 4px rgba(150, 164, 176, 0.1);
`;

const title = css`
  font-size: 20px;

  @media (max-width: 360px), screen and (orientation: portrait) {
    font-size: 18px;
  }
`;

const monthlyAmount = css`
  font-size: 40px;
  color: #0079ff;

  @media (max-width: 360px), screen and (orientation: portrait) {
    font-size: 36px;
  }
`;

const monthlyAmountArea = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  padding: 40px 32px;
`;

const feedbackArea = css`
  display: flex;
  align-items: center;
  background: #f4f8fa;
  height: 66px;
  padding: 16px 32px;
  border: 1px solid #e1e8ed;
  border-radius: 0 0 4px 4px;
  border-top: none;
  font-size: 16px;
`;

export {
  resultAreaContainer,
  title,
  monthlyAmountArea,
  monthlyAmount,
  feedbackArea
};
