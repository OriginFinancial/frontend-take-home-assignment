import * as React from 'react';
import { Provider } from 'react-redux';
import Savings from './pages/Savings';
import store from './store';

import GlobalStyle from './styled';

const App: React.FC = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Savings />
  </Provider>
);

export default App;
