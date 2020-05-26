import React from 'react';
import styled from 'styled-components';

const DateInputContainer = styled.div`
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

const DateInputStyle = styled.div`
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
  width: 200px;
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

interface Date {
  onChange?: (value: string) => void;
  value?: string;
}

const DateInput: React.FC<Date> = ({ onChange, value }) => (

  <DateInputContainer>
    <Label>Reach goal by</Label>
    <DateInputStyle>
      <Icon>X</Icon>
      <InputStyle
        type="date"
        onChange={value}
        value={value}
        {console.log(value)}
      />
      <Icon>X</Icon>
    </DateInputStyle>
  </DateInputContainer>
);

export default DateInput;
