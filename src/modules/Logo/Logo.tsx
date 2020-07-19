import * as React from 'react';
import { logoStyled } from './Logo.styles';
import styled from 'styled-components';
import { LogoProps } from './interfaces';

const LogoStyled = styled.div`
  ${logoStyled};
`;

const Logo = ({ logo }: { logo: string }): React.ReactElement<LogoProps> => {
  return (
    <LogoStyled>
      <img src={logo} alt="Origin Logo" />
    </LogoStyled>
  );
};

export { Logo };
