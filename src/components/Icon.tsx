import * as React from 'react';
import styled from 'styled-components';

import HouseImage from '../icons/house.svg';
import ArrowLeft from '../icons/arrow.svg';

export interface Icon<T> extends React.FunctionComponent<T> {
  House?: React.FunctionComponent;
  ArrowLeft?: React.FunctionComponent;
  ArrowRight?: React.FunctionComponent;
}

interface IconProps {
  readonly src: string;
}

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const ArrowRight = styled(Image)`
  transform: rotate(180deg);
`;

const Icon: Icon<IconProps> = ({ src }) => {
  return <Image src={src} alt="" />;
};

const HouseIcon: React.FunctionComponent = () => {
  return <Icon src={HouseImage} />;
};

const ArrowLeftIcon: React.FunctionComponent = () => {
  return <Icon src={ArrowLeft} />;
};

const ArrowRightIcon: React.FunctionComponent = () => {
  return <ArrowRight src={ArrowLeft} />;
};

Icon.House = HouseIcon;
Icon.ArrowLeft = ArrowLeftIcon;
Icon.ArrowRight = ArrowRightIcon;

export default Icon;
