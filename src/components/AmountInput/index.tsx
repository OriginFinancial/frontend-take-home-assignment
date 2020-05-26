import React, { useState } from 'react';
import styled from 'styled-components';

const AmountInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Label = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #1c1e1f;
  margin-bottom: 4px;
`;

const AmountInputStyle = styled.div`
  display: flex;
`;

const Icon = styled.span`
  width: 56px;
  height: 56px
  background: #f4f8fa;
  border: 1px solid #e1e8ed;
  box-sizing: border-box;
  border-radius: 4px 0px 0px 4px;

  font-size: 22px;
  line-height: 26px;
  
  display: flex;
  align-items: center;
  justify-content: center;

  color: #657786;
`;

const InputStyle = styled.input`
  width: 257px;
  height: 56px;
  background: #ffffff;
  border: 1px solid #e1e8ed;
  box-sizing: border-box;

  padding-left: 16px;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.166667px;
  color: #1c1e1f;

  @media (min-width: 1440px) {
    width: 176px;
  }
`;

interface TotalAmount {
  type?: string;
  value?: number;
  onChange?: (value: number) => void;
}

const AmountInput: React.FC<TotalAmount> = () => {
  const [totalAmount, setTotalAmount] = useState('');

  const handleAmount = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTotalAmount(e.target.value);
  };

  return (
    <AmountInputContainer>
      <Label>Total amount</Label>
      <AmountInputStyle>
        <Icon>$</Icon>
        <InputStyle
          type="number"
          // pattern="/\d/gi"
          value={totalAmount}
          onChange={handleAmount}
        />
      </AmountInputStyle>
    </AmountInputContainer>
  );
};

export default AmountInput;
