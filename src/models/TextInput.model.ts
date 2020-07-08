import { FormEvent } from '.';

export interface TextInputProps {
  label: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
