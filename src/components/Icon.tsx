import * as React from 'react';
import styled from 'styled-components';

import HouseImage from '../icons/house.svg';
import ArrowLeft from '../icons/arrow.svg';
import Money from '../icons/money.svg';

export interface Icon<T> extends React.FunctionComponent<T> {
  House?: React.FunctionComponent;
  ArrowLeft?: React.FunctionComponent;
  ArrowRight?: React.FunctionComponent;
  Money?: React.FunctionComponent;
}

interface IconProps {
  readonly src: string;
}

const Image = styled.img`
  height: 100%;
  width: 100%;
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

const MoneyIcon: React.FunctionComponent = () => {
  return <Icon src={Money} />;
};

Icon.House = HouseIcon;
Icon.ArrowLeft = ArrowLeftIcon;
Icon.ArrowRight = ArrowRightIcon;
Icon.Money = MoneyIcon;

export default Icon;
