import React from 'react';
import { array, func } from 'prop-types';
import Styled from 'styled-components';
import { mq } from '../../components/utils/mediaQueries';
import { Typography } from '../../components/Typography';
import { Grid, Container } from '../../components/Layout';
import { Goal } from '../../components/Goal';
import { useGoals } from '../../hooks/useGoals';

const propTypes = {
  goals: array,
  setupGoal: func.isRequired
};

const Wrapper = Styled.div`
  padding: 4em 0 2em;
  ${mq({
    textAlign: ['center', 'center', 'center', 'center', 'left']
  })}
`;

const Goals = ({ goals: stateGoals, setupGoal }) => {
  const { goals } = useGoals(stateGoals);

  return (
    <Container maxWidth="xl">
      <Wrapper>
        <Typography variant="h1">{`Here's your saving goals!`}</Typography>
      </Wrapper>

      <Grid container>
        {goals.map(goal => (
          <Goal goal={goal} key={goal.id} setupGoal={setupGoal} />
        ))}
      </Grid>
    </Container>
  );
};

Goals.propTypes = propTypes;
Goals.displayName = 'Goals';

export { Goals };
