import React from 'react';
import { navigate } from '@reach/router';
import { Grid } from '../Layout';
import { Typography } from '../Typography';
import { Card, CardMedia, CardAction } from '../Card';
import { Button } from '../Button';
import { object } from 'prop-types';

const propTypes = {
  goal: object.isRequired
};

const Goal = ({ goal }) => {
  const openGoal = () => navigate(`details/${goal.id}`);

  return (
    <Grid item>
      <Card data-testid={goal.title}>
        <CardMedia>{goal.icon}</CardMedia>
        <Typography variant="h4">{goal.title}</Typography>
        <CardAction>
          <Button onClick={openGoal}>Start setup</Button>
        </CardAction>
      </Card>
    </Grid>
  );
};

Goal.displayName = 'Goal';
Goal.propTypes = propTypes;

export { Goal };
