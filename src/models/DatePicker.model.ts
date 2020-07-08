import { KeyboardEvent, MonthYear } from '.';

export interface DatePickerProps {
  data: Data;
  actions: Actions;
}

interface Data {
  selectedDate: MonthYear;
  isPrevButtonDisabled: boolean;
}

interface Actions {
  handlePressNextDate: () => void;
  handlePressPreviousDate: () => void;
  handlePressKeyboardArrows: (e: KeyboardEvent) => void;
}
