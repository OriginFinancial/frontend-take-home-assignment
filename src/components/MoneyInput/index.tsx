import * as React from 'react';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { Input, InputWrapper, Label, Currency } from './styles';

const moneyMask = createNumberMask({
  prefix: '',
  allowDecimal: true,
  decimalSymbol: '.',
  decimalLimit: 2
});

interface MoneyInputProps {
  id: string;
  label: string;
  setAmount: React.Dispatch<React.SetStateAction<string>>;
}

const MoneyInput: React.FC<MoneyInputProps> = ({ id, label, setAmount }) => {
  return (
    <InputWrapper>
      <Label htmlFor={id}>{label}</Label>
      <Currency>$</Currency>
      <MaskedInput
        mask={moneyMask}
        guide={false}
        render={(ref, props) => <Input id={id} ref={ref} {...props} onChange={event => setAmount(event.target.value)} />}
      />
    </InputWrapper>
  );
};

export default MoneyInput;
