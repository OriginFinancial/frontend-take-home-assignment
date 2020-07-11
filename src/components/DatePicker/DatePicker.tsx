import * as React from 'react';
import styled, { css } from 'styled-components';
import { DatePickerProps } from '../../models';
import { form } from '../../styles';
import ArrowIcon from '../../icons/arrow.svg';

const DatePicker: React.FunctionComponent<DatePickerProps> = ({
  data: { selectedDate, isPrevButtonDisabled },
  actions: {
    handlePressNextDate,
    handlePressPreviousDate,
    handlePressKeyboardArrows
  }
}) => {
  return (
    <Container>
      <IconButton
        onClick={handlePressPreviousDate}
        onKeyDown={handlePressKeyboardArrows}
        disabled={isPrevButtonDisabled}
      >
        <ArrowLeftIcon src={ArrowIcon} />
      </IconButton>
      <DateInfo>
        <Month id="testDateMonth">{selectedDate?.month}</Month>
        <Year id="testDateYear">{selectedDate?.year}</Year>
      </DateInfo>
      <IconButton
        onClick={handlePressNextDate}
        onKeyDown={handlePressKeyboardArrows}
      >
        <ArrowRightIcon src={ArrowIcon} />
      </IconButton>
    </Container>
  );
};

const Container = styled.div`
  align-items: center;
  display: flex;
`;

const Month = styled.b``;

const Year = styled.span``;

const DateInfo = styled.p`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  margin: 0;
  padding: 0.8rem 1.6rem;
`;

const IconButton = styled.button<{ disabled?: boolean }>`
  align-items: center;
  background-color: ${props => props?.theme?.colors?.primary?.extralight};
  border: 0.1rem solid ${props => props?.theme?.colors?.secondary?.main};
  border-radius: 0.3rem;
  cursor: pointer;
  display: flex;
  padding: 1.6rem;
  outline: none;

  ${props =>
    props.disabled &&
    css`
      background: ${props => props?.theme?.colors?.white};
    `}
  ${form.formComponentFocus};
`;
const ArrowLeftIcon = styled.img`
  height: 1.2rem;
  width: 1.2rem;
`;

const ArrowRightIcon = styled.img`
  height: 1.2rem;
  width: 1.2rem;
  transform: rotate(180deg);
`;

export default DatePicker;
