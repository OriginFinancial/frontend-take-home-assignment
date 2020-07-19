import { css } from 'styled-components';
import {
  fieldset,
  inputDecoratorBaseStyles,
  inputBaseStyles
} from '../InputBaseStyles';

const depositInputContainer = () => css`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  color: #1c1e1f;
`;

const inputWrapper = () => css`
  ${fieldset};
`;

const depositInputDecorator = () => css`
  ${inputDecoratorBaseStyles};
  pointer-events: none;
`;

const depositComponent = () => css`
  ${inputBaseStyles};
`;

export {
  depositInputContainer,
  inputWrapper,
  depositInputDecorator,
  depositComponent
};
