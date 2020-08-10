import styled from 'styled-components';
import CurrencyInput from 'react-currency-input';

export const CurrencyField = styled(CurrencyInput)`
  height: 56px;
  width: 177px;
  background: #ffffff;
  border: 1px solid #e1e8ed;
  box-sizing: border-box;
  border-left: none;
  font-size: 20px;
  line-height: 24px;
  font-weight: 600px;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 0 4px 4px 0;
`;

CurrencyField.displayName = "currencyinput"

export const InputLabel = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 4px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FieldContainer = styled.div`
  display: flex;
`;

export const InputAdornment = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  background-color: #f4f8fa;
  border: 1px solid #e1e8ed;
  font-size: 22px;
  line-height: 26px;
  color: #657786;
  border-radius: 4px 0 0 4px;
`;
