import * as React from 'react';
import styled from 'styled-components';
import {
  dateInputContainer,
  inputWrapper,
  dateInputComponent,
  inputDecoratorDate,
  inputDecoratorRight
} from './dateInput.styles';
import { DateInputProps } from './interfaces';
import arrowSVG from '../../../../icons/arrow.svg';
import { MONTHS } from '../../../../consts';

const Container = styled.section`
  ${dateInputContainer};
`;

const InputWrapper = styled.div`
  ${inputWrapper};
`;

const DateInputComponent = styled.div`
  ${dateInputComponent};
`;

const DateInputDecoratorRight = styled.div`
  ${inputDecoratorRight};
`;

const InputDecoratorDate = styled.div`
  ${inputDecoratorDate};
`;

const Label = styled.label``;

const DateInput: React.FunctionComponent<DateInputProps> = ({
  blockPastDate,
  month,
  year,
  setMonth,
  setYear
}) => {
  const currentYear = new Date().getFullYear();

  const handleChange = (side: string) => {
    if (side === 'right') {
      const newMonth = month < 11 ? month + 1 : 0;
      const newYear = year + 1;

      setMonth(newMonth);

      if (month === 11) {
        setYear(newYear);
      }
    } else {
      const newMonth = month > 0 ? month - 1 : 11;
      const newYear = newMonth === 11 ? year - 1 : year;

      setMonth(newMonth);

      if (year !== newYear && year > currentYear) {
        setYear(newYear);
      }
    }
  };

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.keyCode === 39) {
        handleChange('right');
      }

      if (e.keyCode === 37 && !blockPastDate) {
        handleChange('left');
      }
    };
    document.addEventListener('keydown', event => handleKeyDown(event));
    return () => {
      document.removeEventListener('keydown', event => handleKeyDown(event));
    };
  }, [handleChange]);

  return (
    <Container>
      <Label>Reach goal by</Label>
      <InputWrapper>
        <button
          data-testid="left-button"
          onClick={() => handleChange('left')}
          disabled={blockPastDate}
        >
          <InputDecoratorDate>
            <img src={arrowSVG} />
          </InputDecoratorDate>
        </button>

        <DateInputComponent>
          <span>{MONTHS[month]}</span>
          <span>{year}</span>
        </DateInputComponent>

        <button
          data-testid="right-button"
          onClick={() => handleChange('right')}
        >
          <DateInputDecoratorRight>
            <img src={arrowSVG} />
          </DateInputDecoratorRight>
        </button>
      </InputWrapper>
    </Container>
  );
};

export { DateInput };
