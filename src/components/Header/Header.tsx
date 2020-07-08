import * as React from 'react';
import styled from 'styled-components';
import { Container } from '..';
import { media } from '../../styles';
import OriginLogo from '../../icons/logo.svg';

const Header: React.FunctionComponent = () => {
  return (
    <Wrapper>
      <Container>
        <Logo src={OriginLogo} />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  background-color: ${props => props.theme.colors.white};
  padding: 1.2rem 0.8rem;

  ${media.lg} {
    padding: 2rem 0;
  }
`;

const Logo = styled.img`
  color: ${props => props.theme.colors.text.main};
  width: 6rem;
  height: auto;
`;

export default Header;
