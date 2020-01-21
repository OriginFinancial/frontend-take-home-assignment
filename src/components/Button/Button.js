import styled, { css } from 'styled-components';
import { mq } from '../utils/mediaQueries';

const buttonBase = ({ minWidth = '220px' }) => css`
  ${mq({ minWidth: ['40px', '80px', '100px', minWidth] })}
  padding: 12px 16px;
  color: #fff;
  cursor: pointer;
  border: none;
  border-radius: 25px;
  position: relative;
  background-color: #1b31a8;
  font-size: 16px;
  font-weight: 600;

  &:hover {
    background-color: #0079ff;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #eff7ff;
    color: #aab8c2;
  }

  &:before {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    content: '';
    background-color: #3377bb;
    transform: translateX(-100%);
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.1s 0.3s;
  }

  &:after {
    content: '';
    border: solid 2px #fff;
    border-left-color: transparent;
    width: 16px;
    height: 16px;
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
    margin-top: -8px;
    margin-left: -8px;
    opacity: 0;
    transition: opacity 0.2s 0.1s ease;
  }
`;

const buttonSecondary = ({ secondary }) =>
  secondary &&
  css`
    color: #e1e8ed;
    background-color: #eff7ff;
    border: 1px solid #aab8c2;
  `;

const Button = styled.button`
  ${buttonBase}
  ${buttonSecondary}
`;

Button.displayName = 'Button';

export { Button };
