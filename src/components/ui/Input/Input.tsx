import * as React from 'react';
import CurrencyInput from 'react-currency-input';
import './input.scss';

interface Props {
  type?: string;
  initialValue?: number;
  autofocus?: boolean;
  valueSetter?: () => void;
}

const Input: React.FC<Props> = props => {
  const [value, setValue] = React.useState<string>('0');
  const refInput = React.useRef<object>();

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
          decimalSeparator="."
          thousandSeparator=","
          onChangeEvent={(event, maskedValue, floatValue) => (
            props.valueSetter(floatValue), setValue(floatValue)
          )}
          ref={refInput}
          maxLength="11"
          value={value}
          size="9"
          selectAllOnFocus
          autoFocus
        />
      </span>
    </label>
  );
};

export default Input;
