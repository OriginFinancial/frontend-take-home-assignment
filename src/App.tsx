import * as React from 'react';
import SavingGoalPlanSimulator from './pages/SavingGoalPlanSimulator/SavingGoalPlanSimulator';
import Wrapper from './components/Wrapper/Wrapper';
import './assets/styles/app.scss';

const App: React.FunctionComponent = () => {
  const [colorTheme, setColorTheme] = React.useState('light');
  return (
    <div className={'origin ' + colorTheme}>
      <Wrapper>
        <SavingGoalPlanSimulator />
      </Wrapper>
    </div>
  );
};

export default App;
