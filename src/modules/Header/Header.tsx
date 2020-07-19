import * as React from 'react';
import styled from 'styled-components';
import { HeaderProps } from './interfaces';
import { Icon } from './components';
import { header, title, subtitle } from './Header.styles';
import academySVG from '../../icons/academy.svg';

const HeaderStyled = styled.header`
  ${header};
`;

const Title = styled.h1`
  ${title};
`;

const Subtitle = styled.p`
  ${subtitle};
`;

const Header: React.FunctionComponent<HeaderProps> = ({ title, subtitle }) => {
  return (
    <HeaderStyled>
      <Icon icon={academySVG} alt="Academy icon" />
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </HeaderStyled>
  );
};

export { Header };
