import React from 'react';
import styled from 'styled-components';
import arrowSVG from '../../icons/arrow.svg';
import { Side } from './utils';

interface ButtonProps {
  side: Side;
  disabled?: boolean;
  onClick: (e: Side) => void;
}

const StyledButton = styled.button`
  background: #e1e8ed;
  border-radius: ${({ side }: ButtonProps) =>
    side === Side.left ? '0.4rem 0 0 0.4rem' : '0 0.4rem 0.4rem 0'};
  padding: 2rem 1.9rem;
  border: 0.1rem solid #e1e8ed;
  transition: opacity 250ms ease;
  opacity: ${({ disabled }: ButtonProps) => (disabled ? 0.4 : 1)};
  cursor: ${({ disabled }: ButtonProps) => (disabled ? 'default' : 'pointer')};
  ${({ side }: ButtonProps) =>
    side === Side.right
      ? `
  & > img {
    transform: rotate(180deg);
  }
  `
      : null};
`;

const StyledArrow = styled.img`
  heigth: 1.6rem;
  width: 0.88rem;
`;

const ArrowButton: React.FC<ButtonProps> = ({ side, onClick, disabled }) => {
  const handleClickCb = React.useCallback(() => onClick(side), [side, onClick]);
  return (
    <StyledButton onClick={handleClickCb} side={side} disabled={disabled}>
      <StyledArrow src={arrowSVG} alt="Arrow pointing to the left" />
    </StyledButton>
  );
};

export default ArrowButton;
