import * as React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: ${props => props.theme.buttons.default};
  border: 1px solid #1b31a8;
  border-radius: 32px;
  color: #fff;
  height: 56px;
  font-size: 18px;
  font-weight: 600;
  width: 100%;
`;

export default Button;
