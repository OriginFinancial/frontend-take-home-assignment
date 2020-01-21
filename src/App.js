import React from 'react';
import styled from 'styled-components';
import WebFont from 'webfontloader';
import { Router } from '@reach/router';
import { Header } from './components/Header';
import { Logo } from './components/Icons';
import { Global } from './components/Global';
import { Goals } from './pages/Goals';

WebFont.load({
  google: {
    families: ['Rubik', 'Work Sans']
  }
});

const Body = styled.div`
  background-color: #e1e8ed;
  min-height: 100vh;
  font-size: 14px;
`;

const App = () => (
  <Body>
    <Global />
    <Header>
      <Logo width="5em" height="5em"/>
    </Header>

    <Router>
      <Goals path="goals" default />
    </Router>
  </Body>
);

export default App;
