import * as React from 'react';
import { shallow } from 'enzyme';
import App from '../../src/components/App';

describe('App', () => {
  it('should render', () => {
    const component = shallow(<App />);

    expect(component.exists()).toEqual(true);
  });
});
