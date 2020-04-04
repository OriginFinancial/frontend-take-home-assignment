import * as React from 'react';
import './header.scss';

const Header: React.FC = () => {
  return (
    <header className="mainHeader">
      <a href="/">
        <img src={require('~/assets/images/logoPrimary.svg')} alt="Origin" />
      </a>
    </header>
  );
};

export default Header;
