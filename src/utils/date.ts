import { MonthYear } from '../models';
import { constants } from '.';

export const generateYearsArray = (yearsQuantity: number): number[] => {
  const currentYear: number = new Date().getFullYear();
  const maxYear: number = currentYear + yearsQuantity;
  let years: number[] = [];

  for (let i = currentYear; i <= maxYear; i++) {
    years.push(i);
  }
  return years;
};

export const getCurrentYear = (): number => {
  return new Date().getFullYear();
};

export const getCurrentMonth = (monthsFromNow: number = 0): string => {
  const month: number = new Date().getMonth();
  return constants.months[month + monthsFromNow];
};

export const getCurrentDate = (): MonthYear => {
  return {
    month: getCurrentMonth(1),
    year: getCurrentYear()
  };
};

export const getNextDate = (date: MonthYear): MonthYear => {
  const currentMonthIndex = constants.months.indexOf(date.month);
  const nextMonth =
    constants.months[currentMonthIndex + 1] || constants.months[0];

  const nextYear =
    currentMonthIndex + 1 === constants.months.length
      ? date.year + 1
      : date.year;

  return {
    month: nextMonth,
    year: nextYear
  };
};

export const getPreviousDate = (date: MonthYear): MonthYear => {
  const monthIndex = constants.months.indexOf(date.month);
  const previousMonth =
    constants.months[monthIndex - 1] ||
    constants.months[constants.months.length - 1];

  const previousYear = monthIndex === 0 ? date.year - 1 : date.year;

  return {
    month: previousMonth,
    year: previousYear
  };
};

export const isItPreviousDate = (selectedDate: MonthYear): boolean => {
  const { month, year } = getCurrentDate();

  const isPrevYear = selectedDate.year <= year;

  const isPrevMonth =
    constants.months.indexOf(selectedDate.month) <=
    constants.months.indexOf(month);

  return isPrevYear && isPrevMonth;
};

export const getMonthsDifferenceUntillDate = (date: MonthYear): number => {
  const now = new Date();
  const fromMonth = now.getMonth();
  const fromYear = date.year;
  const toMonth = constants.months.indexOf(date.month);
  const toYear = now.getFullYear();

  let monthsDiff;
  monthsDiff = (fromYear - toYear) * 12;
  monthsDiff -= fromMonth;
  monthsDiff += toMonth;
  return monthsDiff <= 0 ? 1 : monthsDiff;
};
