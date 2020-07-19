import * as React from 'react';
import { ResetCss as AppStyled } from './App.styles';
import {
  Header,
  HeaderText,
  Logo,
  Navbar,
  MainContainer,
  MainArea,
  PlanningArea,
  SubmitButton
} from './modules';
import logoSVG from './icons/logo.svg';

const App: React.FunctionComponent = () => {
  return (
    <>
      <AppStyled />
      <Navbar>
        <Logo logo={logoSVG} />
      </Navbar>
      <MainContainer>
        <HeaderText>{`Let's plan your saving goal.`}</HeaderText>
        <MainArea>
          <Header title="Buy a house" subtitle="Saving goal" />
          <PlanningArea />
          <SubmitButton text="Confirm" />
        </MainArea>
      </MainContainer>
    </>
  );
};

export default App;
