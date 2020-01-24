import React from 'react';
import { Provider } from 'react-redux';
import { Router } from '@reach/router';
import styled from 'styled-components';
import WebFont from 'webfontloader';
import { Header } from './components/Header';
import { Logo } from './components/Icons';
import { Global } from './components/Global';
import Goals from './pages/Goals';
import Details from './pages/Details';
import { store } from './store';

WebFont.load({
  google: {
    families: ['Rubik', 'Work Sans']
  }
});

const Body = styled.div`
  background-color: #f4f8fa;
  min-height: 100vh;
  font-size: 16px;
`;

const App = () => (
  <Body>
    <Global />
    <Header>
      <Logo size="xl" />
    </Header>

    <Provider store={store}>
      <Router>
        <Goals path="/" />
        <Details path="details/:goalId" />
      </Router>
    </Provider>
  </Body>
);

export default App;
