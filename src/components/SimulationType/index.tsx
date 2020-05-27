import React from 'react';
import styled from 'styled-components';
import houseShape from '../../icons/houseShape.svg';

const TypeCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Icon = styled.img`
  width: 32px;
  height: 32px;

  @media (min-width: 801px) {
    width: 40px;
    height: 40px;
  }
`;

const Title = styled.span`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.2px;
  color: #1c1e1f;

  @media (min-width: 1440px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

const Subtitle = styled.span`
  font-size: 14px;
  line-height: 20px;
  color: #657786;

  @media (min-width: 1440px) {
    font-size: 16px;
    line-height: 20px;
  }
`;

const SimulationType: React.FC = () => (
  <TypeCard>
    <Icon src={houseShape} />
    <Title>Buy a house</Title>
    <Subtitle>Saving goal</Subtitle>
  </TypeCard>
);

export default SimulationType;
