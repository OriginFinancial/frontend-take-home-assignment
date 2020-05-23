import * as React from 'react';
import styled from 'styled-components';
import logo from '../../icons/logo.svg';

const HeaderStyle = styled.div`
  background: #fff;
  width: 100%;
`;

const LogoStyle = styled.img`
  width: 20%;
  margin: 16px 29px 10px;

  @media (min-width: 1440px) {
    width: 8%;
  }
`;

const Header: React.FC = () => (
  <HeaderStyle>
    <LogoStyle src={logo} alt="Origin Logo" />
  </HeaderStyle>
);

export default Header;
