import * as React from 'react';
import Header from './components/Header';
import { GlobalStyle } from './styles/global';

const App: React.FunctionComponent = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
    </>
  );
};

export default App;
