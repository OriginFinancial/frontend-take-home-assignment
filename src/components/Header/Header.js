import React from 'react';
import styled from 'styled-components';
import { node } from 'prop-types';

const propTypes = {
  children: node.isRequired
};

const HeaderStyled = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 0 70px;
  align-items: center;
  height: 70px;
`;

const Header = ({ children }) => (
  <HeaderStyled data-testid="header-component">{children}</HeaderStyled>
);

Header.displayName = 'Header';
Header.propTypes = propTypes;

export { Header };
