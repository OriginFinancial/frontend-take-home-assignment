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
  display: flex;
  height: 56px;
  width: 100%;
`;

const Button = styled.button`
  border: none;
  height: 100%;
  padding: 16px 20px;
  pointer-events: none;
  width: 56px;
`;

const Input = styled(CurrencyInput)`
  border: none;
  font-size: 20px;
  font-weight: 600;
  height: 100%;
  padding: 10px;
  width: 100%;
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
        decimalsLimit={2}
        allowNegativeValue={false}
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
