import React from 'react';

import SavingGoalCard from '../../shared/SavingGoalCard';

import { PageStyle, Paragraph } from './styles';

const Dashboard: React.FC = () => {
  return (
    <PageStyle>
      <Paragraph>
        Let&apos;s plan your <strong>saving goal</strong>
      </Paragraph>
      <SavingGoalCard />
    </PageStyle>
  );
};

export default Dashboard;
