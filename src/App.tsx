import * as React from 'react';
import { Layout } from './components';
import { Home } from './pages';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './styles';

const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Home />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
