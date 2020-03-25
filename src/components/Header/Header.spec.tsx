import * as React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

describe('<Header />', () => {
  it('Renders without crashing', () => {
    const header = shallow(<Header />);

    expect(header).toBeTruthy();
  });
});
