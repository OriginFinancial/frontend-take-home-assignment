import React from 'react';
import {
  CurrencyField as SCurrencyField,
  FieldContainer,
  InputLabel,
  InputContainer,
  InputAdornment
} from './styles';

export interface InputCurrencyProps {
  value?: number,
  onChange?: (value: number) => void;
}

const CurrencyField = (props: InputCurrencyProps) => {
  const { onChange, ...rest } = props;

  const onChange_ = (value: string): void => {
    const parsedValue: number = Number(value.replace(/\D/gi, '')) / 100;
    return onChange(parsedValue);
  };

  return (
    <InputContainer>
      <InputLabel>Total Amount</InputLabel>
      <FieldContainer>
        <InputAdornment>$</InputAdornment>
        <SCurrencyField
          onChange={onChange_}
          decimalSeparator="."
          thousandSeparator=","
          precision="2"
          {...rest}
        />
      </FieldContainer>
    </InputContainer>
  );
};

export default CurrencyField;
