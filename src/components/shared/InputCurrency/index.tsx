import React from 'react';

import { currencyFormatter } from '../../../helpers/formatters';

import {
  AmountInputContainer,
  AmountInputStyle,
  Label,
  Icon,
  InputStyle
} from './styles';

import { InputCurrencyProps } from './interfaces';

const InputCurrency: React.FC<InputCurrencyProps> = ({ onChange, value }) => (
  <AmountInputContainer>
    <Label>Total amount</Label>

    <AmountInputStyle tabIndex={0}>
      <Icon>$</Icon>
      <InputStyle
        type="text"
        value={currencyFormatter(value)}
        onChange={e => onChange(Number(e.target.value.replace(/\D/gi, '')))}
      />
    </AmountInputStyle>
  </AmountInputContainer>
);

export default InputCurrency;
