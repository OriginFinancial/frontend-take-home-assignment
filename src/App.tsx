import * as React from 'react';

import Header from './components/Header';
import './global.css';

const App: React.FunctionComponent = () => {
  return (
    <div>
      <Header />
      <p>
        Let's plan your <strong>saving goal</strong>{' '}
      </p>
    </div>
  );
};

export default App;
