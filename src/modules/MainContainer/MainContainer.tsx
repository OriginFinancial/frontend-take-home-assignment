import * as React from 'react';
import styled from 'styled-components';
import { mainContainer } from './mainContainer.styles';

const MainContainerStyled = styled.section`
  ${mainContainer};
`;

const MainContainer: React.FunctionComponent = ({ children }) => {
  return <MainContainerStyled>{children}</MainContainerStyled>;
};

export { MainContainer };
