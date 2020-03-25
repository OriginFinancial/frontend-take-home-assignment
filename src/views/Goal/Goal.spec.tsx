import * as React from 'react';
import { shallow } from 'enzyme';
import Goal from './index';

describe('<Goal />', () => {
  it('Should render without crash', () => {
    const goal = shallow(<Goal />);

    expect(goal).toBeTruthy();
  });
});
