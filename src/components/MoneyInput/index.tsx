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

const MoneyInput: React.FC<{
  label: string;
  setAmount: React.Dispatch<React.SetStateAction<string>>;
}> = ({ label, setAmount }) => {
  const labelId = generateLabelId(label);

  function generateLabelId(label: string): string {
    return label.toLowerCase().replace(/ /g, '');
  }

  return (
    <InputWrapper>
      <Label htmlFor={labelId}>{label}</Label>
      <Currency>$</Currency>
      <MaskedInput
        mask={moneyMask}
        guide={false}
        render={(ref, props) => <Input id={labelId} ref={ref} {...props} onChange={event => setAmount(event.target.value)} />}
      />
    </InputWrapper>
  );
};

export default MoneyInput;
