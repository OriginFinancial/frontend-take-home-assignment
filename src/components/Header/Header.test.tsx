import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import Header from './Header';

describe('Header component', () => {
  let component: ReactWrapper;

  beforeEach(() => {
    jest.clearAllMocks();
    component = mount(<Header />);
  });

  it('renders initial layout', () => {
    expect(component.getElements()).toMatchSnapshot();
  });

  it('renders the logo image', () => {
    expect(component.find('img').length).toBe(1);
  });
});
