import React from 'react';
import houseShape from '../../../assets/icons/houseShape.svg';

import { TypeCard, Title, Subtitle, Icon } from './styles';

const SimulationType: React.FC = () => (
  <TypeCard>
    <Icon src={houseShape} />
    <Title>Buy a house</Title>
    <Subtitle>Saving goal</Subtitle>
  </TypeCard>
);

export default SimulationType;
