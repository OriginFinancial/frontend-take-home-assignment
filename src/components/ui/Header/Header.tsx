import * as React from 'react';
import './header.scss';

const Header: React.FC = () => {
  return (
    <header className="mainHeader">
      <img src={require('~/assets/images/logoPrimary.svg')} alt="Origin" />
    </header>
  );
};

export default Header;
