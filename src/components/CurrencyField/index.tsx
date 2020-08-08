import React from 'react';
import {
  CurrencyField as SCurrencyField,
  InputContainer,
  InputAdornment
} from './styles';

const CurrencyField = props => {
  const { value, onChange, ...rest } = props;

  const currencyFormatter = (value: number): string => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      currencyDisplay: 'code',
      minimumFractionDigits: 2
    });

    const formattedValue = formatter.format(value);
    const valueWithoutSymbol = formattedValue.replace(/[a-z]{3}/i, '').trim();

    return valueWithoutSymbol;
  };

  const onChange_ = event => {
    event.preventDefault();
    console.log(currencyFormatter(event.target.value));
    event.target.value = Number(event.target.value.replace(/\D/gi, ''));
    return onChange(event);
  };

  return (
    <InputContainer>
      <InputAdornment>$</InputAdornment>
      <SCurrencyField
        value={currencyFormatter(value)}
        onChange={onChange_}
        {...rest}
      />
    </InputContainer>
  );
};

export default CurrencyField;
