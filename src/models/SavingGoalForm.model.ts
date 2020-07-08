import { KeyboardEvent, MonthYear } from '.';

export interface SavingGoalFormProps {
  data: Data;
  actions: Actions;
}

interface Data {
  amount: string;
  selectedDate: MonthYear;
  isPrevButtonDisabled: boolean;
  totalOfMonths: number;
  monthlyAmount: string;
}

interface Actions {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePressNextDate: () => void;
  handlePressPreviousDate: () => void;
  handlePressKeyboardArrows: (e: KeyboardEvent) => void;
}
