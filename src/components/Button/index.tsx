import React from 'react';
import PurpleButton from '../../ui/PurpleButton';

interface Props {
  onClick?: (e: React.MouseEvent) => void;
}

const Button: React.FC<Props> = ({ onClick, children }) => (
  <PurpleButton onClick={onClick}>{children}</PurpleButton>
);

export default Button;
