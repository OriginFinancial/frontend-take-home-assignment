import React from 'react';
import { array } from 'prop-types';
import { Typography } from '../../components/Typography';
import { Grid, Container } from '../../components/Layout';
import { Goal } from '../../components/Goal';
import defaultGoals from '../../enums/goals';

const propTypes = {
  goals: array
};

const EmptyList = () => (
  <Typography data-testid="empty-list" variant="h3">
    {`Sorry, we don't have goals =(`}
  </Typography>
);

const Goals = ({ goals = defaultGoals }) => (
  <Container maxWidth="xl">
    <Typography variant="h1">{`Here's your saving goals`}</Typography>
    <Grid container>
      {goals.length ? (
        goals.map(goal => <Goal goal={goal} key={goal.id} />)
      ) : (
        <EmptyList />
      )}
    </Grid>
  </Container>
);

Goals.propTypes = propTypes;
Goals.displayName = 'Goals';

export { Goals };
