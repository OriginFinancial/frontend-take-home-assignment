import * as React from 'react';

import GlobalStyle from '../assets/globalStyle';

import Header from './layout/Header';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />

      <Header />
      <Dashboard />
    </>
  );
};

export default App;
