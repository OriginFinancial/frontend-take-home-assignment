import React from 'react';
import {
  CurrencyField as SCurrencyField,
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
      <InputAdornment>$</InputAdornment>
      <SCurrencyField
        // value={currencyFormatter(value)}
        onChange={onChange_}
        decimalSeparator="."
        thousandSeparator=","
        precision="2"
        {...rest}
      />
    </InputContainer>
  );
};

export default CurrencyField;
