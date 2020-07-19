import * as React from 'react';
import styled from 'styled-components';
import {
  depositInputContainer,
  inputWrapper,
  depositComponent,
  depositInputDecorator
} from './depositInput.styles';
import { DepositInputProps } from './interfaces';
import { moneyMask } from '../../../../utils';

const Container = styled.section`
  ${depositInputContainer};
`;
const InputWrapper = styled.div`
  ${inputWrapper};
`;

const DepositInputComponent = styled.input`
  ${depositComponent};
  font-family: 'Work Sans', sans-serif;
`;

const DepositInputDecorator = styled.div`
  ${depositInputDecorator};
`;

const Label = styled.label``;

const DepositInput: React.FunctionComponent<DepositInputProps> = ({
  onChange,
  value
}) => {
  return (
    <Container>
      <Label>Total amount</Label>
      <InputWrapper>
        <DepositInputDecorator>$</DepositInputDecorator>
        <DepositInputComponent value={moneyMask(value)} onChange={onChange} />
      </InputWrapper>
    </Container>
  );
};

export { DepositInput };
