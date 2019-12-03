import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/globalStyles';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  color: ${theme.neutrals.black};
  background-color: ${theme.neutrals.superlightGrey};
`;

const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper>Let&apos;s setup your saving goal.</Wrapper>
    </ThemeProvider>
  );
};

export default App;
