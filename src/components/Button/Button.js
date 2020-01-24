import styled, { css } from 'styled-components';
import { mq } from '../utils/mediaQueries';
import Sizes from '../utils/buttonSizes';

const buttonBase = ({ minWidth = 'md' }) => css`
  ${mq({ minWidth: ['40px', '80px', '100px', Sizes[minWidth]] })}
  padding: 12px 16px;
  color: #fff;
  cursor: pointer;
  border: none;
  border-radius: 25px;
  background-color: #1b31a8;
  font-size: 16px;
  font-weight: 600;
`;

const buttonSecondary = ({ rounded }) =>
  rounded &&
  css`
    ${mq({ minWidth: [0, 0, 0, 0, 0, 0] })}
    padding: 1em;
    color: #000;
    border-radius: 50%;
    background-color: #fff;
    border: 1px solid #e1e8ed;
  `;

const Button = styled.button`
  ${buttonBase}
  ${buttonSecondary}
`;

Button.displayName = 'Button';

export { Button };
