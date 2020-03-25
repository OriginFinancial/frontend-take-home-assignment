import * as React from 'react';
import { format, addMonths, subMonths } from 'date-fns';
import { Label, InputWrapper, ArrowLeft, ArrowRight, DateWrapper, Month, Year } from './styles';
import { leftArrow, rightArrow } from './keycodes';

interface MonthInputProps {
  label: string;
  selectedDate: Date;
  isPastDisabled: boolean;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
}

const MonthInput: React.FC<MonthInputProps> = ({ label, selectedDate, isPastDisabled, setDate }) => {
  const month = format(selectedDate, 'MMMM');
  const year = format(selectedDate, 'uuuu');

  function getPrevMonth() {
    return subMonths(selectedDate, 1);
  }

  function getNextMonth() {
    return addMonths(selectedDate, 1);
  }

  function handleKeyUp(event: React.KeyboardEvent) {
    if (event.keyCode === leftArrow && isPastDisabled === false) return getPrevMonth();
    if (event.keyCode === rightArrow) return getNextMonth();

    return selectedDate;
  }

  return (
    <InputWrapper tabIndex={0} onKeyUp={event => setDate(handleKeyUp(event))}>
      <Label>{label}</Label>
      <ArrowLeft disabled={isPastDisabled} onClick={() => setDate(getPrevMonth())}></ArrowLeft>
      <DateWrapper>
        <Month>{month}</Month>
        <Year>{year}</Year>
      </DateWrapper>
      <ArrowRight onClick={() => setDate(getNextMonth())}></ArrowRight>
    </InputWrapper>
  );
};

export default MonthInput;
