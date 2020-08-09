import * as React from 'react';
import AppBar from './components/AppBar';
import SavingGoal from './views/SavingGoal';
import GlobalStyle from './styles';

const App: React.FunctionComponent = () => {
  return (
    <main>
      <GlobalStyle />
      <AppBar />
      <SavingGoal />
    </main>
  );
};

export default App;
