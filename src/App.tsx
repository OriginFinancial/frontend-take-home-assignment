import * as React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import theme from './theme';

import Header from './components/Header';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600&display=swap');

  body {
    font-family: 'Work Sans', sans-serif;
    padding: 0;
    margin: 0;
    min-height: 100vh;
    background: #f2f2f2;
  }
`;

const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
    </ThemeProvider>
  );
};

export default App;
