import { css } from 'styled-components';
import {
  fieldset,
  inputBaseStyles,
  inputDecoratorBaseStyles
} from '../InputBaseStyles';

const dateInputContainer = () => css`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  color: #1c1e1f;
  margin-right: 16px;
`;

const inputWrapper = () => css`
  ${fieldset};
  button {
    border: none;
    background: #e1e8ed;
    border-radius: 4px 0 0 4px;
    cursor: pointer;
  }

  button:last-child {
    border-radius: 0 4px 4px 0;
  }
`;

const inputRightBorder = () =>
  css`
    border-right: none;
    border-radius: 0;
  `;

const dateInputComponent = () => css`
  ${inputBaseStyles};
  ${inputRightBorder};
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 122px;
  padding: 6px 10px;
  pointer-events: none;

  span:last-child {
    margin-top: 2px;
    font-size: 16px;
    font-weight: 400;
  }
`;

const inputDecoratorDate = () => css`
  ${inputDecoratorBaseStyles};
  background: #e1e8ed;
`;

const inputDecoratorRight = () => css`
  ${inputDecoratorBaseStyles};
  ${inputDecoratorDate};
  border-radius: 0 4px 4px 0px;

  img {
    transform: rotate(180deg);
  }
`;

export {
  dateInputContainer,
  inputWrapper,
  dateInputComponent,
  inputDecoratorDate,
  inputDecoratorRight,
  inputRightBorder
};
