import React from 'react';
import styled from 'styled-components';

const HeaderStyled = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 0 70px;
  align-items: center;
  height: 70px;
`;

const Header = ({ children }) => (
  <HeaderStyled data-testid='header-component'>{children}</HeaderStyled>
);

export { Header };
