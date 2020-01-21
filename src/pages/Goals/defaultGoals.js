import React from 'react';
import {
  Academy,
  Beach,
  Car,
  Rings,
  Economy,
  Baby
} from '../../components/Icons';

const college = {
  title: 'Go to college',
  icon: <Academy width="2em" height="2em" />
};
const vacation = {
  title: 'Take a vacation',
  icon: <Beach width="2em" height="2em" />
};
const car = {
  title: 'Buy a car',
  icon: <Car width="2em" height="2em" />
};
const weeding = {
  title: 'Throw a wedding party',
  icon: <Rings width="2em" height="2em" />
};
const emergency = {
  title: 'Build an emergency fund',
  icon: <Economy width="2em" height="2em" />
};
const baby = {
  title: 'Have a baby',
  icon: <Baby width="2em" height="2em" />
};

export default [college, vacation, car, weeding, emergency, baby];
