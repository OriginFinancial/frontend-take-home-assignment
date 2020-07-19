import * as React from 'react';
import styled from 'styled-components';
import { submitButton } from './submitButton.styles';
import { SubmitButtonProps } from './interfaces';

const SubmitButtonStyled = styled.button`
  ${submitButton};
`;

const SubmitButton: React.FunctionComponent<SubmitButtonProps> = ({ text }) => {
  return <SubmitButtonStyled>{text}</SubmitButtonStyled>;
};

export { SubmitButton };
