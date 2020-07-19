import * as React from 'react';
import styled from 'styled-components';
import { mainArea } from './MainArea.styles';

const MainAreaStyled = styled.main`
  ${mainArea};
`;

const MainArea: React.FunctionComponent = ({ children }) => {
  return <MainAreaStyled>{children}</MainAreaStyled>;
};

export { MainArea };
