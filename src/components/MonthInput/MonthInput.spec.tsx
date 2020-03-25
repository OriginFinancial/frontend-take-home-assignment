import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { addMonths } from 'date-fns';
import * as renderer from 'react-test-renderer';
import MonthInput from './index';
import { leftArrow, rightArrow } from './keycodes';
import { InputWrapper, ArrowLeft, ArrowRight } from './styles';

describe('<MonthInput />', () => {
  const nextMonth = addMonths(new Date(), 1);
  let setState: jest.Mock;
  let monthInput: ShallowWrapper;

  beforeEach(() => {
    setState = jest.fn();

    monthInput = shallow(<MonthInput label="Reach goal by" selectedDate={nextMonth} isPastDisabled={false} setDate={setState} />);
  });

  it('Renders without crashing', () => {
    expect(monthInput).toBeTruthy();
  });

  it('Click on the LEFT arrow button should call setDate', () => {
    monthInput.find(ArrowLeft).simulate('click');

    expect(setState).toBeCalledTimes(1);
  });

  it('Click on the RIGHT arrow button should call setDate', () => {
    monthInput.find(ArrowRight).simulate('click');

    expect(setState).toBeCalledTimes(1);
  });

  it('Typing the LEFT arrow key on keyboard should call setDate', () => {
    monthInput.find(InputWrapper).simulate('keyup', { keyCode: leftArrow });

    expect(setState).toBeCalledTimes(1);
  });

  it('Typing the RIGHT arrow key on keyboard should call setDate', () => {
    monthInput.find(InputWrapper).simulate('keyup', { keyCode: rightArrow });

    expect(setState).toBeCalledTimes(1);
  });

  it('Typing the SPACE key on keyboard should call setDate', () => {
    monthInput.find(InputWrapper).simulate('keyup', { keyCode: 32 });

    expect(setState).toBeCalledTimes(1);
  });

  it('Arrow left render with disabled true', () => {
    const setDate = jest.fn();
    const arrowLeft = renderer.create(<ArrowLeft disabled={true} onClick={setDate}></ArrowLeft>).toJSON();

    expect(arrowLeft).toMatchSnapshot();
  });

  it('Arrow left render with disabled false', () => {
    const setDate = jest.fn();
    const arrowLeft = renderer.create(<ArrowLeft disabled={false} onClick={setDate}></ArrowLeft>).toJSON();

    expect(arrowLeft).toMatchSnapshot();
  });
});
