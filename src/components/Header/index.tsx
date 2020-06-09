import React from 'react';
import styled from 'styled-components';
import { mediaQ } from '../../ui/MediaQueries';
import logo from '../../icons/logo.svg';

const HeaderStyle = styled.div`
  background: #fff;
  width: 100vw;
`;

const LogoStyle = styled.img`
  width: 65px;
  margin: 16px 29px 10px;

  ${mediaQ.desktop} {
    width: 95px;
  }
`;

const Header: React.FC = () => (
  <HeaderStyle>
    <LogoStyle src={logo} alt="Origin Logo" />
  </HeaderStyle>
);

export default Header;
