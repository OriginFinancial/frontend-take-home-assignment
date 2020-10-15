import * as React from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import { formatMoney } from '../helpers/MoneyFormatter';

export interface InputMoneyProps {
  readonly onChange?: Function;
}

const Container = styled.div`
  height: 56px;
  width: 100%;
  display: flex;
  align-items: center;
  border: 1px solid #e1e8ed;
  border-radius: 4px;
`;

const Button = styled.button`
  height: 100%;
  width: 48px;
  padding: 15px;
  border: none;
  pointer-events: none;
`;

const Input = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  padding: 10px;
  font-weight: 600;
  font-size: 20px;
`;

const InputMoney: React.FunctionComponent<InputMoneyProps> = ({ onChange }) => {
  const [value, setValue] = React.useState(0);
  const [formattedValue, setFormattedValue] = React.useState('0');
  const [isEditing, setEditing] = React.useState(false);

  React.useEffect(() => {
    const newValue = formatMoney(value);
    setFormattedValue(newValue);

    if (onChange) {
      onChange(value);
    }
  }, [value, onChange]);

  return (
    <Container>
      <Button>
        <Icon.Money />
      </Button>
      {(isEditing) ? (
        <Input
          value={value}
          onChange={event => {
            // @ts-ignore
            setValue(event.target.value);
          }}
          onBlur={() => setEditing(false)}
        />
      ) : (
        <Input
          value={formattedValue}
          readOnly
          onClick={() => setEditing(true)}
        />
      )}
    </Container>
  );
};

export default InputMoney;
