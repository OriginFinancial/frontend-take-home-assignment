import { MonthYear } from '.';
export interface GoalSummaryProps {
  data: Data;
}

interface Data {
  amount: string;
  selectedDate: MonthYear;
  totalOfMonths: number;
  monthlyAmount: string;
}
