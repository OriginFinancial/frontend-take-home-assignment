import React from 'react';

import logo from '../../../assets/icons/logo.svg';
import { HeaderStyle, LogoStyle } from './styles';

const Header: React.FC = () => (
  <HeaderStyle>
    <LogoStyle src={logo} alt="Origin Logo" />
  </HeaderStyle>
);

export default Header;
