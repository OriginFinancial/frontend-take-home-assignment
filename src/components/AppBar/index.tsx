import React from 'react';
import logoIcon from '../../icons/logo.svg';
import { Bar, Logo } from './styles';

const AppBar = () => {
  return (
    <Bar>
      <Logo src={logoIcon} />
    </Bar>
  );
};

export default AppBar;
