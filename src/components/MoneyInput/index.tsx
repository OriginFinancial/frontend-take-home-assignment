import React from 'react';
import styled from 'styled-components';
import { toCurrency } from './utils';

const StyledContainer = styled.div`
  display: flex;
`;

const StyledLabel = styled.span`
  padding: 1.6rem 2rem;
  color: #657786;
  font-size: 2.2rem;
  line-height: 1.18;
  letter-spacing: -0.018rem;
  background: #f4f8fa;
  border: 0.1rem solid #e1e8ed;
  border-radius: 0.4rem 0 0 0.4rem;
`;

const StyledInput = styled.input`
  width: 100%;
  border: 0.1rem solid #e1e8ed;
  border-left: none;
  border-radius: 0 0.4rem 0.4rem 0;
  font-size: 2rem;
  line-height: 1.2rem;
  font-weight: 600;
  padding: 1.6rem;
  letter-spacing: -0.016rem;
`;

interface Props {
  className?: string;
  onChange?: (value: number) => void;
}

const MoneyInput: React.FC<Props> = ({ className, onChange, value }) => (
  <StyledContainer className={className}>
    <StyledLabel>$</StyledLabel>
    <StyledInput
      type="text"
      onChange={e => {
        onChange(e.target.value.replace(/\D/gi, ''));
      }}
      value={toCurrency(value)}
    />
  </StyledContainer>
);

export default MoneyInput;
