import * as React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Routes from './routes';

import GlobalStyle from './styled';

const App: React.FC = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Routes />
  </Provider>
);

export default App;
