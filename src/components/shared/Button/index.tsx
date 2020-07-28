import React from 'react';

import { ButtonProps } from './interfaces';
import { ButtonContainer } from './styles';

const Button: React.FC<ButtonProps> = ({ onClick, children }) => (
  <ButtonContainer onClick={onClick}>{children}</ButtonContainer>
);

export default Button;
