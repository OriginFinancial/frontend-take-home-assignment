import React from 'react';
import { navigate } from '@reach/router';
import { object } from 'prop-types';
import { Grid } from '../Layout';
import { Typography } from '../Typography';
import { Card, CardMedia, CardAction } from '../Card';
import { Button } from '../Button';
import * as Icons from '../Icons';
import { Plan } from '../Plan';

const propTypes = {
  goal: object.isRequired
};

const Goal = ({ goal: { plan, category, id, title } }) => {
  const openGoal = () => navigate(`details/${id}`);
  const Icon = Icons[category];

  return (
    <Grid item>
      <Card data-testid={title}>
        <CardMedia>
          <Icon />
        </CardMedia>
        <Typography variant="h4">{title}</Typography>

        {plan ? (
          <Plan amount={plan.amount} reachDate={plan.reachDate} />
        ) : (
          <CardAction>
            <Button onClick={openGoal}>Start setup</Button>
          </CardAction>
        )}
      </Card>
    </Grid>
  );
};

Goal.displayName = 'Goal';
Goal.propTypes = propTypes;

export { Goal };
