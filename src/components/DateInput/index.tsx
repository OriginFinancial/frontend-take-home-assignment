import React from 'react';
import styled from 'styled-components';
import ArrowButton from './ArrowButton';
import { Side } from './utils';
import { months } from '../../utils/date';

interface DateInputProps {
  className?: string;
  month: number;
  year: number;
  setMonth: (value: number) => void;
  setYear: (value: number) => void;
}

const StyledContainer = styled.div`
  display: flex;
  width: 100%;
`;

const StyledTextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 0.1rem solid #e1e8ed;
  border-top: 0.1rem solid #e1e8ed;
`;

const StyledMonth = styled.span`
  font-size: 2rem;
  line-height: 1.2;
  font-weight: 600;
  letter-spacing: -0.016rem;
`;

const StyledYear = styled.span`
  font-size: 1.4rem;
  line-height: 1.42;
`;

const DateInput: React.FC<DateInputProps> = ({
  className,
  month,
  setMonth,
  year,
  setYear
}) => {
  const today = new Date();
  const isCurrentDate = React.useMemo(
    () => month === today.getMonth() && year === today.getFullYear(),
    [month, year, today]
  );
  const handleChange = React.useCallback(
    (side: Side) => {
      if (side === Side.right) {
        const newMonth = (month + 1) % months.length;
        if (month === 11) {
          setYear(year + 1);
        }
        setMonth(newMonth);
      } else {
        const newMonth =
          (month === 0 ? months.length - 1 : month - 1) % months.length;
        const newYear = month === 0 ? year - 1 : year;

        if (year !== newYear) {
          setYear(newYear);
        }
        setMonth(newMonth);
      }
    },
    [month, year, setMonth, setYear]
  );

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      /* keycode for ->  39 */
      if (e.keyCode === 39) {
        handleChange(Side.right);
      }
      /* keycode for <- 37 */
      if (e.keyCode === 37 && !isCurrentDate) {
        handleChange(Side.left);
      }
    };
    document.addEventListener('keydown', event => handleKeyDown(event));
    return () => {
      document.removeEventListener('keydown', event => handleKeyDown(event));
    };
  }, [handleChange, isCurrentDate]);

  return (
    <StyledContainer className={className}>
      <ArrowButton
        disabled={isCurrentDate}
        side={Side.left}
        onClick={handleChange}
      />
      <StyledTextContainer>
        <StyledMonth>{months[month]}</StyledMonth>
        <StyledYear>{year}</StyledYear>
      </StyledTextContainer>
      <ArrowButton side={Side.right} onClick={handleChange} />
    </StyledContainer>
  );
};

export default DateInput;
