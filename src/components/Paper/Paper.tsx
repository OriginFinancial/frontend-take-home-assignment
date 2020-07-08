import * as React from 'react';
import styled from 'styled-components';
import { PaperProps } from '../../models';

const Paper: React.FunctionComponent<PaperProps> = ({ children, ...rest }) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

const Wrapper = styled.div<PaperProps>`
  background-color: ${props => props.theme.colors.white};
  border: 0.1rem solid ${props => props.theme.colors.secondary.main};
  border-radius: ${({ radiusSmall }) => {
    return radiusSmall ? 0.4 : 1;
  }}rem;
`;

export default Paper;
