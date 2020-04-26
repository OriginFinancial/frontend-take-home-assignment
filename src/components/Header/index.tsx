import React from 'react';
import styled from 'styled-components';
import logoSVG from '../../icons/logo.svg';
import { media } from '../../styles/mediaQueries';

const StyledContainer = styled.div`
  background: #fff;
  width: 100%;
`;

const StyledImage = styled.img`
  height: 2.6rem;
  margin: 2rem 0 1.42rem 1.6rem;

  ${media.desktop} {
    height: 3.8rem;
    margin: 2.8rem 0 1.9rem 3.7rem;
  }
`;

const Header: React.FC = () => (
  <StyledContainer>
    <StyledImage src={logoSVG} />
  </StyledContainer>
);

export default Header;
