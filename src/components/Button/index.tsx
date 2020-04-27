import React from 'react';
import styled from 'styled-components';
import { media } from '../../styles/mediaQueries';

const StyledButton = styled.button`
  background: #1b31a8;
  padding: 1.6rem 0;
  width: 100%;
  font-size: 1.8rem;
  line-height: 1.33;
  font-weight: 600;
  color: #fff;
  border-radius: 3.2rem;
  min-width: 32.8rem;

  ${media.desktop} {
    max-width: 40rem;
  }
`;

interface Props {
  onClick: (e: React.MouseEvent) => void;
  className?: string;
}

const Button: React.FC<Props> = ({ onClick, children, className }) => (
  <StyledButton className={className} onClick={onClick}>
    {children}
  </StyledButton>
);

export default Button;
