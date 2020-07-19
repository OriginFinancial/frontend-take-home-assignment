import { css } from 'styled-components';

const fieldset = () => css`
  display: flex;
  margin: 4px 17px 0 0;
  min-height: 56px;

  @media (max-width: 360px), screen and (orientation: portrait) {
    margin-bottom: 16px;
  }
`;

const inputBaseStyles = () => css`
  border: 1px solid #e1e8ed;
  border-left: none;
  border-radius: 0 4px 4px 0;
  padding: 16px;
  color: #1c1e1f;
  font-size: 20px;
  font-weight: 600;
  outline: none;
  width: 177px;
  max-height: 56px;

  @media (max-width: 360px), screen and (orientation: portrait) {
    width: 230px;
  }
`;

const inputDecoratorBaseStyles = () => css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  font-size: 22px;
  font-weight: regular;
  color: #657786;
  background: #f4f8fa;
  border: 1px solid #e1e8ed;
  border-radius: 4px 0 0 4px;
`;

export { fieldset, inputBaseStyles, inputDecoratorBaseStyles };
