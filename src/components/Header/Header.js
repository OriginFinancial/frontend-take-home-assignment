import React from 'react';
import styled from 'styled-components';
import { mq } from '../utils/mediaQueries';
import { node } from 'prop-types';

const propTypes = {
  children: node.isRequired
};

const HeaderStyled = styled.div`
  background-color: #fff;
  ${mq({
    textAlign: ['center', 'center', 'center', 'center', 'left']
  })}
  ${mq({
    padding: ['0', '0', '0', '0', '0 4em']
  })}
`;

const Header = ({ children }) => (
  <HeaderStyled data-testid="header-component">{children}</HeaderStyled>
);

Header.displayName = 'Header';
Header.propTypes = propTypes;

export { Header };
