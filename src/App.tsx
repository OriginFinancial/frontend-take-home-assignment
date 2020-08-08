import * as React from 'react';
import SavingGoal from './views/SavingGoal';
import GlobalStyle from './styles';

const App: React.FunctionComponent = () => {
  return (
    <main>
      <GlobalStyle />
      <SavingGoal />
    </main>
  );
};

export default App;
