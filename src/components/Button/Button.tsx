import * as React from 'react';
import styled from 'styled-components';
import { ChildrenProps } from '../../models';

const Button: React.FunctionComponent<ChildrenProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.button`
  background-color: ${props => props?.theme?.colors?.primary?.main};
  border: 0.1rem solid ${props => props?.theme?.colors?.primary?.main};
  border-radius: 3rem;
  color: ${props => props?.theme?.colors?.white};
  cursor: pointer;
  font-weight: 700;
  padding: 1.8rem 0.8rem;
  text-align: center;
  transition: background-color 0.4s;
  width: 100%;

  &:hover {
    background-color: ${props => props?.theme?.colors?.primary?.dark};
  }

  &:focus {
    outline: 0.1rem solid ${props => props?.theme?.colors?.primary?.light};
  }
`;

export default Button;
