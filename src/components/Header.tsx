import * as React from 'react';
import styled from 'styled-components';

import logo from '../icons/logo.svg';

const Container = styled.header`
  display: flex;
  align-items: center;
  height: 56px;
  padding: 0 16px;
  background: #fff;

  ${props => `
    ${props.theme.breakpoints.md} {
      height: 79px;
      padding: 0 37px;
    }
  `}
`;

const Logo = styled.img`
  height: 20px;

  ${props => `
    ${props.theme.breakpoints.md} {
      height: 30px;
    }
  `}
`;

const Header: React.FunctionComponent = () => {
  return (
    <Container>
      <Logo src={logo} alt="Origin Logo" />
    </Container>
  );
};

export default Header;
