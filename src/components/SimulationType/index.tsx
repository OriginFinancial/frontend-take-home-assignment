import React from 'react';
import styled from 'styled-components';
import { mediaQ } from '../../ui/mediaQueries';
import houseShape from '../../icons/houseShape.svg';

const TypeCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Icon = styled.img`
  width: 32px;
  height: 32px;

  ${mediaQ.desktop} {
    width: 40px;
    height: 40px;
  }
`;

const Title = styled.span`
  font-weight: 600;
  font-size: 24px;
  color: #1c1e1f;

  ${mediaQ.desktop} {
    font-size: 32px;
  }
`;

const Subtitle = styled.span`
  font-size: 14px;
  line-height: 20px;
  color: #657786;

  ${mediaQ.desktop} {
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
