import React, { useState } from 'react';
import { string, func, array } from 'prop-types';
import { Container } from '../../components/Layout';
import dayjs from 'dayjs';
import { Card, CardMedia, CardAction } from '../../components/Card';
import { Typography } from '../../components/Typography';
import { Button } from '../../components/Button';
import { Arrow } from '../../components/Icons';
import { Nav, NavItem } from '../../components/Nav';
import { Calculator } from '../../components/Calculator';
import { SavingInput } from '../../components/SavingInput';
import * as Icons from '../../components/Icons';

const propTypes = {
  goals: array.isRequired,
  goalId: string.isRequired,
  updateGoal: func.isRequired,
  navigate: func.isRequired
};

const Details = ({ goals, goalId, updateGoal, navigate }) => {
  const goal = goals.find(goal => goal.id === goalId);
  const [amount, setAmount] = useState(0);
  const [reachDate, setReach] = useState(dayjs());
  const Icon = Icons[goal.category];

  const saveGoal = () => {
    const plan = { amount, reachDate };

    updateGoal({
      ...goal,
      plan
    });

    navigate('/');
  };

  return (
    <Container maxWidth="md">
      <Nav>
        <NavItem>
          <Button
            data-testid="navigate-back"
            rounded
            onClick={() => navigate('/')}
          >
            <Arrow size="xs" />
          </Button>
        </NavItem>
        <NavItem>
          <Typography variant="title1" color="blue">
            {`Let's`} plan your <strong>saving goal</strong>.
          </Typography>
        </NavItem>
      </Nav>

      {goal && (
        <Card alignItems="left" padding="2.5em">
          <CardMedia alignItems="left">
            <Icon />
            <Typography data-testid="goal-title" variant="h2">
              {goal.title}
            </Typography>
            <Typography variant="subtitle1" color="grey">
              Saving goal
            </Typography>
          </CardMedia>

          <SavingInput setAmount={setAmount} setReach={setReach} />

          <Calculator amount={amount} reachDate={reachDate} />

          <CardAction>
            <Button data-testid="save-goal" minWidth="lg" onClick={saveGoal}>
              Finish
            </Button>
          </CardAction>
        </Card>
      )}
    </Container>
  );
};

Details.propTypes = propTypes;

export { Details };
