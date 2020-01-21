import React from 'react';
import { Grid } from '../Layout';
import { Typography } from '../Typography';
import { Card, CardMedia, CardAction } from '../Card';
import { Button } from '../Button';
import { object } from 'prop-types';

const propTypes = {
  goal: object.isRequired
};

const Goal = ({ goal }) => (
  <Grid item>
    <Card data-testid={goal.title}>
      <CardMedia>{goal.icon}</CardMedia>
      <Typography variant="h4">{goal.title}</Typography>
      <CardAction>
        <Button>Start setup</Button>
      </CardAction>
    </Card>
  </Grid>
);

Goal.displayName = 'Goal';
Goal.propTypes = propTypes;

export { Goal };
