import * as React from 'react';
import { Layout } from './components';
import { Home } from './pages';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './styles';
import 'typeface-inter';

const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyle />
        <Home />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
