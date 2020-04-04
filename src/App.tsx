import * as React from 'react';
import SavingGoalPlanSimulator from './pages/SavingGoalPlanSimulator/SavingGoalPlanSimulator';
import Wrapper from './components/Wrapper/Wrapper';
import './assets/styles/app.scss';

const App: React.FunctionComponent = () => {
  return (
    <div className="origin" data-theme="light">
      <Wrapper>
        <SavingGoalPlanSimulator />
        <div className="endMobile"></div>
      </Wrapper>
    </div>
  );
};

export default App;
