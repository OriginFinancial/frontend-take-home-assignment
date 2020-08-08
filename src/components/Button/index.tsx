import React from 'react';
import { Button as SButton } from './styles';

const Button = props => <SButton {...props}>{props.children}</SButton>;

export default Button;
