import * as React from 'react';
import CurrencyInput from 'react-currency-input';
import './input.scss';

interface Props {
  type?: string;
  valueSetter: () => number;
}

const Input: React.FC<Props> = props => {
  const [value, setValue] = React.useState<string>('0');
  const refInput = React.useRef<HTMLInputElement>(null);

  const sendHandler = floatValue => {
    props.valueSetter(value);
    setValue(floatValue);
  };

  return (
    <label className="input">
      Total amount
      <span className="innerHolder">
        <span className="icon">$</span>
        <CurrencyInput
          onChangeEvent={(
            event: object,
            maskedValue: string,
            floatValue: number
          ) => (props.valueSetter(floatValue), setValue(floatValue))}
          ref={refInput}
          maxLength="11"
          value={value}
          size="9"
          decimalSeparator="."
          thousandSeparator=","
          selectAllOnFocus
          autoFocus
        />
      </span>
    </label>
  );
};

export default Input;
