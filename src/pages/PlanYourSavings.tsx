import * as React from 'react';

import Page from '../components/Page';
import Card from '../components/Card';
import Icon from '../components/Icon';

const PlanYourSavings: React.FunctionComponent = () => {
  return (
    <Page>
      <Page.Title>
        Let&apos;s plan your <strong>saving goal.</strong>
      </Page.Title>
      <Page.Body>
        <Card>
          <Card.Icon>
            <Icon.House />
          </Card.Icon>
          <Card.Title>Buy a house</Card.Title>
          <Card.Subtitle>Saving goal</Card.Subtitle>
        </Card>
      </Page.Body>
    </Page>
  );
};

export default PlanYourSavings;
