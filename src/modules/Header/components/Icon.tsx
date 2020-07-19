import * as React from 'react';
import { icon } from './icon.styles';
import { IconProps } from './interfaces';
import styled from 'styled-components';

const IconStyled = styled.div`
  ${icon};
`;

const Icon: React.FunctionComponent<IconProps> = ({ icon, alt }) => (
  <IconStyled>
    <img src={icon} alt={alt} />
  </IconStyled>
);

export { Icon };
