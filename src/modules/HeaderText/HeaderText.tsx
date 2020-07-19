import * as React from 'react';
import styled from 'styled-components';
import { headerText } from './HeaderText.styles';

const HeaderTextStyled = styled.h1`
  ${headerText};
`;

const HeaderText: React.FunctionComponent = ({ children }) => {
  return <HeaderTextStyled>{children}</HeaderTextStyled>;
};

export { HeaderText };
