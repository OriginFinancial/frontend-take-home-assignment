import * as React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
  it('renders', () => {
    const component = shallow(<App />);

    expect(component.exists()).toEqual(true);
  });
});
