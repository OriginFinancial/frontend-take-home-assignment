import React from 'react';

import './styles.css';

import logo from './src/icons/logo.svg';

function Header() {
  return (
    <header>
      <img src={logo} alt="Origin" />
    </header>
  );
}

export default Header;
