import React from 'react';
import { string } from 'prop-types';
import { Container } from '../../components/Layout';
import { Card, CardMedia, CardAction } from '../../components/Card';
import { Typography } from '../../components/Typography';
import { Button } from '../../components/Button';
import goalsEnum from '../../enums/goals';

const propTypes = {
  goalId: string.isRequired
};

const Details = props => {
  const goal = goalsEnum.find(goal => goal.id === props.goalId);

  return (
    <Container maxWidth="sm">
      <Typography variant="h3">{`Let's plan your saving goal.`}</Typography>

      {goal && (
        <Card alignItems="left">
          <CardMedia alignItems="left">
            {goal.icon}
            <Typography variant="h2">{goal.title}</Typography>
            <Typography variant="subtitle2">Saving goal</Typography>
          </CardMedia>
          <CardAction>
            <Button minWidth="300px">Finish</Button>
          </CardAction>
        </Card>
      )}
    </Container>
  );
};

Details.propTypes = propTypes;

export { Details };
