import React from 'react';
import { Grid } from '../Layout';
import { Typography } from '../Typography';
import { Card, CardMedia } from '../Card';
import { object } from 'prop-types';

const propTypes = {
  goal: object.isRequired
};

const Goal = ({ goal }) => (
  <Grid item>
    <Card data-testid={goal.title}>
      <CardMedia>{goal.icon}</CardMedia>
      <Typography variant="h4">{goal.title}</Typography>
    </Card>
  </Grid>
);

Goal.displayName = 'Goal';
Goal.propTypes = propTypes;

export { Goal };
