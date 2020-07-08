import * as React from 'react';

import GlobalStyle from './GlobalStyle'
import PlaningSavingGoal from './pages/PlaningSavingGoal'

const App: React.FunctionComponent = () => {
  return (
    <>
      <GlobalStyle />
      <PlaningSavingGoal />
    </>
  )
};

export default App;
