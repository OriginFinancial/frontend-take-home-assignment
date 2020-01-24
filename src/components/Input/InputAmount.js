import React, { useState } from 'react';
import Styled from 'styled-components';
import { func } from 'prop-types';
import { Input } from './Input';

const propTypes = {
  setAmount: func.isRequired
};

const Wrapper = Styled.div`
  display: flex;
  width: 100%;
  font-size: 20px;

  input {
    padding-left: 12px;
    font-size: 20px;
    font-weight: 600; 
  }
`;

const Currency = Styled.div`
  padding: 0.8em 1em;
  color: #657786;
  background-color: #f4f8fa;
  border-radius: 5px 0 0 5px;
  border: 1px solid #e1e8ed;
  border-right-width: 0px;
`;

const InputAmount = ({ setAmount }) => {
  const [value, setValue] = useState(0);

  const onChange = ({ target }) => {
    const value = target.value;

    setAmount(Number(value));
    setValue(value);
  };

  return (
    <Wrapper>
      <Currency>{'$'}</Currency>
      <Input type="tel" value={value} onChange={onChange} />
    </Wrapper>
  );
};

InputAmount.propTypes = propTypes;

export { InputAmount };
