import React from 'react';
import {
  CurrencyField as SCurrencyField,
  FieldContainer,
  InputLabel,
  InputContainer,
  InputAdornment
} from './styles';

const CurrencyField = props => {
  const { onChange, ...rest } = props;

  const onChange_ = (value: string): void => {
    const parsedValue = Number(value.replace(/\D/gi, '')) / 100;
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
