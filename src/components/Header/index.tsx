import * as React from 'react';
import logo from '~/icons/logo.svg';
import { StyledHeader } from './styles';

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <img src={logo} alt="Origin" />
    </StyledHeader>
  );
};

export default Header;
