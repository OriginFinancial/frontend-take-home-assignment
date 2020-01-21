import React from 'react';
import { Typography } from '../../components/Typography';
import { Grid, Container } from '../../components/Layout';
import { Card, CardMedia } from '../../components/Card';
import { Academy, Beach, Car, Rings, Economy, Baby } from '../../components/Icons';

const college = {
  title: "Go to college",
  icon: <Academy width="2em" height="2em"/>
};
const vacation = {
  title: "Take a vacation",
  icon: <Beach width="2em" height="2em"/>
};
const car = {
  title: "Buy a car",
  icon: <Car width="2em" height="2em"/>
};
const weeding = {
  title: "Throw a wedding party",
  icon: <Rings width="2em" height="2em"/>
};
const emergency = {
  title: "Build an emergency fund",
  icon: <Economy width="2em" height="2em"/>
};
const baby = {
  title: "Have a baby",
  icon: <Baby width="2em" height="2em"/>
};

const defaultGoals = [college, vacation, car, weeding, emergency, baby];

const EmptyList = () => <Typography variant="h3">Sorry, we don't have goals =(</Typography>

const Goals = ({ goals=defaultGoals }) => (
  <Container fixed>
    <Typography variant="h1">Here's your saving goals</Typography>
    <Grid container>
      {goals.length ? goals.map((goal, index) => (
        <Grid item key={index}>
          <Card data-testid={goal.title}>
            <CardMedia>
              {goal.icon}
            </CardMedia>
            <Typography variant="h4">{goal.title}</Typography>
          </Card>
        </Grid>
      )) : <EmptyList data-testid="empty-list"/> }
    </Grid>
  </Container>
);

export { Goals }