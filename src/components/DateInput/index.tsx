import React from 'react';
import {
  DateField,
  InputContainer,
  LeftButton,
  RightButton,
  Year,
  Month
} from './styles';

const DateInput = props => {
  const { value, onChange, ...rest } = props;
  // const [currentDate, setCurrentDate] = useState();
  const PLUS_ONE = +1;
  const MINUS_ONE = -1;

  const changeDate = (addition: number): void => {
    const selectedDate: Date = value;
    const newDate = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + addition,
      selectedDate.getDate()
    );
    onChange(new Date(newDate));
  };

  const parseSelectedMonth = (value: Date): string => {
    if (value) {
      const month = value.toLocaleDateString('en-US', { month: 'long' });
      return month;
    }
  };

  return (
    <InputContainer>
      <LeftButton onClick={() => changeDate(MINUS_ONE)}>{'<'}</LeftButton>
      <DateField>
        <Month>{parseSelectedMonth(value)}</Month>
        <Year>{value.getFullYear()}</Year>
      </DateField>
      <RightButton onClick={() => changeDate(PLUS_ONE)}>{'>'}</RightButton>
    </InputContainer>
  );
};

export default DateInput;
