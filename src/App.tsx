import * as React from 'react';
import Goal from './views/Goal';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Goal />
    </React.Fragment>
  );
};

export default App;
