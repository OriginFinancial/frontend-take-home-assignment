import * as React from 'react';
import Header from '../UI/Header/Header';
import './wrapper.scss';

const Wrapper: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main className="wrapper">{children}</main>
    </>
  );
};

export default Wrapper;
