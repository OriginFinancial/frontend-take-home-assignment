export interface DateInputProps {
  value: string;
  blockPastDate: boolean;
  month: number;
  year: number;
  setMonth: (value: number) => void;
  setYear: (value: number) => void;
}
