import * as React from 'react';
import styled from 'styled-components';
import { formComponentFocus } from '../../styles';
import { TextInputProps } from '../../models';

const TextInput: React.FunctionComponent<TextInputProps> = ({
  label,
  value,
  handleChange
}) => {
  return (
    <Wrapper>
      <Label htmlFor="numberInput">{label}</Label>

      <Group>
        <DollarSign>$</DollarSign>

        <Input
          value={value}
          onChange={handleChange}
          autoFocus
          type="text"
          id="numberInput"
        />
      </Group>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const Label = styled.label`
  display: inline-block;
  font-weight: 700;
  margin-bottom: 0.8rem;
`;

const Group = styled.div`
  align-items: center;
  display: flex;
  position: relative;
`;

const Input = styled.input`
  background-color: ${props => props?.theme?.colors?.white};
  border: 0.1rem solid ${props => props?.theme?.colors?.primary?.extralight};
  border-radius: 0.3rem;
  color: ${props => props?.theme?.colors?.text?.main};
  font-weight: 700;
  height: 5rem;
  padding-left: 7rem;
  width: 100%;

  ${formComponentFocus};
`;

const DollarSign = styled.div`
  align-items: center;
  border: 0.1rem solid ${props => props?.theme?.colors?.secondary?.main};
  border-bottom-left-radius: 0.4rem;
  border-top-left-radius: 0.4rem;
  background-color: ${props => props?.theme?.colors?.primary?.extralight};
  color: ${props => props?.theme?.colors?.text?.light};
  display: flex;
  font-size: 1.8rem;
  height: 4.8rem;
  justify-content: center;
  left: 0.1rem;
  position: absolute;
  width: 6rem;
`;

export default TextInput;
