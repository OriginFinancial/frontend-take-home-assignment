import React from 'react';
import { array } from 'prop-types';
import { Typography } from '../../components/Typography';
import { Grid, Container } from '../../components/Layout';
import { Goal } from '../../components/Goal';
import defaultGoals from './defaultGoals';

const propTypes = {
  goals: array
};

const EmptyList = () => (
  <Typography data-testid="empty-list" variant="h3">
    {`Sorry, we don't have goals =(`}
  </Typography>
);

const Goals = ({ goals = defaultGoals }) => (
  <Container minWidth="xs">
    <Typography variant="h1">{`Here's your saving goals`}</Typography>
    <Grid container>
      {goals.length ? (
        goals.map((goal, index) => <Goal goal={goal} key={index} />)
      ) : (
        <EmptyList />
      )}
    </Grid>
  </Container>
);

Goals.propTypes = propTypes;
Goals.displayName = 'Goals';

export { Goals };
