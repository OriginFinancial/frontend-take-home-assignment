import * as React from 'react';
import CurrencyInput from 'react-currency-input-field';
import styled from 'styled-components';
import Icon from './Icon';

export interface InputMoneyProps {
  readonly onChange?: Function;
}

const Container = styled.div`
  align-items: center;
  border: 1px solid #e1e8ed;
  border-radius: 4px;
  height: 56px;
  display: flex;
  width: 100%;
`;

const Button = styled.button`
  height: 100%;
  width: 56px;
  padding: 16px 20px;
  border: none;
  pointer-events: none;
`;

const Input = styled(CurrencyInput)`
  height: 100%;
  width: 100%;
  border: none;
  padding: 10px;
  font-weight: 600;
  font-size: 20px;
`;

const InputMoney: React.FunctionComponent<InputMoneyProps> = ({ onChange }) => {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    if (onChange) {
      onChange(value);
    }
  }, [value, onChange]);

  return (
    <Container>
      <Button>
        <Icon.Money />
      </Button>
      <Input
        placeholder="1,000.00"
        data-testid="input-money"
        value={value}
        onChange={value => {
          setValue(Number(value || 0));
        }}
      />
    </Container>
  );
};

export default InputMoney;
