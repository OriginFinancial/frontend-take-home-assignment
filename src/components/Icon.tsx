import * as React from 'react';
import styled from 'styled-components';

import HouseImage from '../icons/house.svg';

export interface Icon<T> extends React.FunctionComponent<T> {
  House?: React.FunctionComponent;
}

interface IconProps {
  readonly src: string;
}

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Icon: Icon<IconProps> = ({ src }) => {
  return <Image src={src} alt="" />;
};

const HouseIcon: React.FunctionComponent = () => {
  return <Icon src={HouseImage} />;
};

Icon.House = HouseIcon;

export default Icon;
