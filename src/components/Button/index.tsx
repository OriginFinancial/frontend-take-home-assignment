import * as React from 'react';
import { StyledButton } from './styles';

const Button: React.FC<{
  text: string;
}> = ({ text }) => {
  return <StyledButton>{text}</StyledButton>;
};

export default Button;
